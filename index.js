//ENV file initialization
require('dotenv').config();

//NPM modules initialization
const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
//const sendMailConfirmation = require('./confirm-mail/send');
const jwt = require('jsonwebtoken');


//Get data from ENV file
const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_PASS;
const EMAIL_SECRET = process.env.EMAIL_SECRET;
const port = process.env.PORT || 3000;
const db = process.env.MONGO_URI;

/*const transporter = nodemailer.createTransport({
    service: 'smtp-relay.sendinblue.com',
    port: '587',
    secure: false,
    auth: {
        user: gmailUser,
        pass: gmailPass
    }
});

transporter.sendMail({
                to: 'tigahil537@coalamails.com',
                subject: 'Confirm Email',
                html: `Please click this email to confirm your email`
})*/
//Create connection with MongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//Get custome User module from User.js file
const User = require('./models/User');

//Get custome Passport module from passport-conf.js file
const initializePassport = require('./passport-conf');
initializePassport(passport);

//Set EJS for login page
app.set('view-engine', 'ejs');

//Basic parameters initialization
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('views'));
app.use(flash());

//Passport module initialization
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//Preparing an EJS file for sending a registration response to the user
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

//Get the start page for the user
app.get('/', checkAuthenticated, (req,res) => {
    res.render('page.ejs');
});

app.get('/progress', (req,res) => {
    res.json(req.user.username);
});

//Get the login page for the user
app.get('/login', checkNotAuthenticated,  (req,res) => {
    res.render('login.ejs');
});

//Get the registration page for the user
app.get('/registration', checkNotAuthenticated, (req,res) => {
    res.render('registration.ejs');    
});

//Check user authorization with passport module
app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

//Registrate new user in MongoDB
app.post('/registration', async (req, res) => {
    try {
        const email = req.body.email, date = Date.now().toString()
        const user = await User.findOne({ email: email });
        if (user) {
            req.flash('error_msg', 'User already exists')
            res.redirect('/registration');
        } else {
            const password = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                email,
                password,
                date
            });
            const saveUser = await newUser.save();
            req.flash('success_msg', 'You have been registered. Now you can login');
            //sendMailConfirmation(transporter, newUser, EMAIL_SECRET);
            res.redirect("/login");
        }
    } catch {
        res.status(400).redirect('/registration');
    }
});

//UNUSED FUNCTION. Check user confirmation token, sended to his email
app.get('/confirmation/:token', async (req, res) => {
    try {
        const email = jwt.verify(req.params.token, EMAIL_SECRET).email;
        await User.updateOne({email:  email }, {confirmed: true});
        req.flash('success_msg', 'Your account has been confirmed')
        res.redirect('/login');
    } catch (e) {
        req.flash('error_msg', 'Invalid confirm token');
        res.redirect('/login');
    }
});

//Logout user from passport
app.delete('/logout', (req,res) => {
    req.logOut();
    res.redirect('/login');
});

//Get User object from MongoDB
app.get('/game', (req, res) => {
    if (req.user) {
        res.json(req.user);
    } else {
        res.sendStatus(400);
    }
});

//Backend logic and user inputs handling and saving in MongoDB for level 1
app.post('/game', async (req,res) => {
    try {
        let user = await User.findOne({email: req.user.email});
        user.level1.push({});
        var i = user.level1.length-1;
        var obj = req.body;
        user.level1[i].questId = obj.id
        await user.save();
        await sleep(Math.round(Math.random()*2000)+3000); 
        for (let j = 0; j<obj.senderArr.length; j++) {
            user.level1[i].sender.push(obj.senderArr[j]);
            await user.save();
            if (!obj.delayArr[j]) obj.delayArr[j] = Math.round(Math.random()*2000)+3000;
            await sleep(obj.delayArr[j]);
            if (!obj.senderArr[j+1]) break;
        }
        user.level1[i].answers = obj.answersArr;
        user.level1[i].nextQuestId = obj.nextQuestId;
        await user.save();
        if (obj.id >= 100) {
            user.level1[i].alert = 'GAME OVER';
            user.level1[i].playerAnswer = 'Game over';
            await user.save();
        } else if (obj.id == 15) {
            user.level1[i].alert = 'Victory';
            user.level1[i].playerAnswer= 'Victory';
            await user.save();
        }
        res.sendStatus(201);
    } catch (e) {
        res.sendStatus(400);
    }
});

//Backend logic and user inputs handling and saving in MongoDB for level 2
app.post('/game2', async (req,res) => {
    try {
        let user = await User.findOne({email: req.user.email});
        user.level2.push({});
        var i = user.level2.length-1;
        var obj = req.body;
        user.level2[i].questId = obj.id
        await user.save();
        await sleep(Math.round(Math.random()*2000)+3000);
        for (let j = 0; j<obj.senderArr.length; j++) {
            user.level2[i].sender.push(obj.senderArr[j]);
            await user.save();
            if (!obj.delayArr[j]) obj.delayArr[j] = Math.round(Math.random()*2000)+3000;
            await sleep(obj.delayArr[j]);
            if (!obj.senderArr[j+1]) break;
        }
        user.level2[i].answers = obj.answersArr;
        user.level2[i].nextQuestId = obj.nextQuestId;
        await user.save();
        if (obj.id >= 100) {
            user.level2[i].playerAnswer = 'Game over';
            switch (obj.id) {
                case 101:
                    user.level2[i].alert = 'The girl is not dead. While Megan searched the body, the girl attacked her. She had the knife. Megan is dead.';
                    break;
                case 102:
                    user.level2[i].alert = 'Granny is dead. Megan has been speaking to a monster. Monster killed Megan.';
                    break;
                case 103:
                    user.level2[i].alert = 'Megan tried to fight the monster. But the monster was stronger. MEgan and her parents are dead. ';
                    break;
                case 104:
                    user.level2[i].alert = 'Megan asked too many questions and waited too long to escape. Granny is dead. Her body was taken by the monster. Monster killed Megan.';
                    break;
                case 105:
                    user.level2[i].alert = 'Megan was right, the granny is dead and Megan was speaking with monster. Megan tried to fight back and used the knife, to monster killed Megan.';
                    break;
                case 106:
                    user.level2[i].alert = 'Megan and her parents tried to fight the monster. At the very end Megan could not fight anymore, because she ate bad fish. The monster managed to kill Megan and her parents.';
                    break;
                case 107:
                    user.level2[i].alert = 'Megan tried to fight the monster. But the monster was stronger. Megan also ate bad fish, so she could not fight at all. Megan and her parents are dead.';
                    break;
                case 108:
                    user.level2[i].alert = 'Megan tried to fight the monster. But the monster was stronger. Megan and her parents are dead.';
                    break;
                case 109:
                    user.level2[i].alert = 'There is a monster in town, who kills everybody. Then monster takes the face of a dead human and finds another victim. This man managed to stay alive and thought, that the driver is a monster. The man shot the driver.';
                    break;
                case 110:
                    user.level2[i].alert = 'The driver had a panic attack and started to run. The driver couldn’t stay calm and wait for help. The driver didn’t see another car. The car hit the driver. The driver is dead.';
                    break;  
            }
            await user.save();
        } else if (obj.id == 98) {
            user.level2[i].playerAnswer = 'Victory';
            user.level2[i].alert = 'VICTORY. Megan and her parents managed to win fight with the monster. They escaped the house, got into the car and left the town.';
            await user.save();
        }
        res.sendStatus(201);
    } catch (e) {
        res.sendStatus(400);
    }
});

//Backend logic and user inputs handling and saving in MongoDB for level 3
app.post('/game3', async (req,res) => {
    try {
        let user = await User.findOne({email: req.user.email});
        user.level3.push({});
        var i = user.level3.length-1;
        var obj = req.body;
        user.level3[i].questId = obj.id
        await user.save();
        await sleep(Math.round(Math.random()*2000)+3000);
        for (let j = 0; j<obj.senderArr.length; j++) {
            user.level3[i].sender.push(obj.senderArr[j]);
            await user.save();
            if (!obj.delayArr[j]) obj.delayArr[j] = Math.round(Math.random()*2000)+3000;
            await sleep(obj.delayArr[j]);
            if (!obj.senderArr[j+1]) break;
        }
        user.level3[i].answers = obj.answersArr;
        user.level3[i].nextQuestId = obj.nextQuestId;
        user.level3[i].alert = obj.alert;
        await user.save();
        if (obj.id >= 100) {
            user.level3[i].playerAnswer = 'Game over';
            switch (obj.id) {
                case 101:
                    user.level3[i].alert = 'Henry died because of blood loss. ';
                    break;
                case 102:
                    user.level3[i].alert = 'Those berries were poisonous.';
                    break;
                case 103:
                    user.level3[i].alert = 'Henry is dead, just like Taylor in the book.';
                    break;
            }
            await user.save();
        } else if (obj.id == 18) {
            user.level3[i].playerAnswer = 'Victory';
            user.level3[i].alert = 'VICTORY! Henry woke up in the train. It all was just a bad dream.';
            await user.save();
        }
        res.sendStatus(201);
    } catch (e) {
        res.sendStatus(400);
    }
});

//Make User object empty for restarting
app.delete('/game', async (req,res) => {
    try {
        let user = await User.findOne({email: req.user.email});
        user.level1 = [];
        user.level2 = [];
        user.level3 = [];
        await user.save();
        user.readedMesseges = 0;
        await user.save();
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(400);
    }
});

//Server output to user input for level 1
app.post('/answer', async (req, res) => {
    try {
        let user = await User.findOne({email: req.user.email});
        user.level1[user.level1.length-1].playerAnswer = req.body.answer;
        await user.save();
        res.sendStatus(201);
    } catch (e) {
        res.sendStatus(400);
    }
});

//Server output to user input for level 2
app.post('/answer2', async (req, res) => {
    try {
        let user = await User.findOne({email: req.user.email});
        user.level2[user.level2.length-1].playerAnswer = req.body.answer;
        await user.save();
        res.sendStatus(201);
    } catch (e) {
        res.sendStatus(400);
    }
});

//Server output to user input for level 3
app.post('/answer3', async (req, res) => {
    try {
        let user = await User.findOne({email: req.user.email});
        user.level3[user.level3.length-1].playerAnswer = req.body.answer;
        await user.save();
        res.sendStatus(201);
    } catch (e) {
        res.sendStatus(400);
    }
});

//Set unread messages for user
app.post('/readed', async (req, res) => {
    try {
        let user = await User.findOne({email: req.user.email});
        user.readedMesseges = req.body.readedMesseges;
        await user.save();
        res.sendStatus(201);
    } catch (e) {
        res.sendStatus(400);
    }
});

//User read unread messages
app.delete('/readed', async (req, res) => {
  try {
        let user = await User.findOne({email: req.user.email});
        user.readedMesseges = 0;
        await user.save();
        res.sendStatus(201);
    } catch (e) {
        res.sendStatus(400);
    }
});

//Restart specific level for user (game over)
app.delete('/restart', async (req, res) => {
  try {
        let user = await User.findOne({email: req.user.email});
        user[req.body.currentLevel] = [];
        await user.save();
        res.sendStatus(201);
    } catch (e) {
        res.sendStatus(400);
    }
});

//Check, if user authenticated
function checkAuthenticated (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
};

function checkNotAuthenticated (req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
};

//Custom function for waiting
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    });
}

//Create server
app.listen(port, () => {
    console.log('Starting server at ' + port);
});
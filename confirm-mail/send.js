/*const jwt = require('jsonwebtoken');

async function send (transporter, user, EMAIL_SECRET) {
    jwt.sign ({ email: user.email }, 
        EMAIL_SECRET, 
        { expiresIn: '7d' }, 
        (err, emailToken) => {
            const url = `https://projekt-sever.glitch.me/confirmation/${emailToken}`;
            transporter.sendMail({
                to: user.email,
                subject: 'Confirm Email',
                html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`
        });
    })
}

module.exports = send;*/
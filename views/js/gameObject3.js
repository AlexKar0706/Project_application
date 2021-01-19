export const gameObject3 = [{
    id: 1,
    senderArr: [],
    delayArr: [],
    answersArr: [],
    nextQuestId: [2],
    alert: 'It was evening hours at about 3 o’clock in the afternoon. Henry was on his train from London to Liverpool.' + 
    'It was the day before Thanksgiving Eve. He was going to his family and realized that most likely the turkey was already waiting,' + 
    'which his father had killed on a hunt last night and his mother had cooked according to an old family recipe. Henry drooled just thinking about it.' + 
    'He sighed and sadness rolled over him. He was so rarely at home, and his heart was trembling even more.',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {
    id: 2,
    senderArr: [],
    delayArr: [],
    answersArr: [],
    nextQuestId: [3],
    alert: 'He sat down in his chair in business class. He still had to finish some work affairs.' + 
    'Although he understood that he had long hours to travel and that he could relax a bit and rest after a long day.' +
    'He decided to listen to an audiobook that captured his attention and thoughts in the past few days.',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {
    id: 3,
    senderArr: [],
    delayArr: [],
    answersArr: [],
    nextQuestId: [4],
    alert: '“Taylor opened her eyes and realized that she was lying on the ground. A sharp pain pierced her shoulder.' +
    'She did not understand where she was and what was happening, her memory seemed to be bent.' + 
    'Trying to get up, she looked around and realized that she was surrounded by a dozen dead people.”',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {
    id: 4,
    senderArr: ['Is anybody here?', 'I’m...', 'Oh', 'I don’t remember anything', 'Are you here?'],
    delayArr: [],
    answersArr: ['How did you find my number?', 'What happened?'],
    nextQuestId: [5, 6],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {//How did you find my number?
    id: 5,
    senderArr: ['I called emergency', 'And got this chat', 'I cannot use different number'],
    delayArr: [],
    answersArr: ['What happened?'],
    nextQuestId: [6],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {//What happened?
    id: 6,
    senderArr: ['I don’t remember', 'I’m laying on the ground', 'My shoulder is aching', 'SHIT', 'I see a lot of people around', 'But...', 'I think they all are dead '],
    delayArr: [],
    answersArr: ['What happened with your shoulder?'],
    nextQuestId: [7],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {//What happened with your shoulder?
    id: 7,
    senderArr: [],
    delayArr: [],
    answersArr: [],
    nextQuestId: [8],
    alert: '“Taylor’s aching shoulder wasn’t letting her go. She realized that a huge chip was sticking out of her shoulder.' +  
    '"Damn it," Taylor thought. She walked a few meters and saw a broken train, the wreckage of which scattered through the forest. "',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {
    id: 8,
    senderArr: ['I think...', 'Oh...', 'There’s a metal chip in my shoulder'],
    delayArr: [],
    answersArr: ['Pull out', 'Don’t pull out'],
    nextQuestId: [101, 9],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {//Don’t pull out
    id: 9,
    senderArr: ['Okay', 'I think, that’s a good idea', 'I try not to move my arm'],
    delayArr: [],
    answersArr: ['Look if anybody is alive', 'Look for your belongings'],
    nextQuestId: [10, 11],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {//Look if anybody is alive
    id: 10,
    senderArr: ['I’ll try', 'Damn', 'Shit!', 'Everybody is dead', 'I think that I need to go...', 'I can’t stay here', 'That smell', 'SHIT', 'I’ll go to the forest'],
    delayArr: [3000, 30000],
    answersArr: [],
    nextQuestId: [13],
    alert: "“Realizing that there was nowhere to find help, Taylor decided to go through the forest to the railroad tracks and move further along them." +
    "The feeling of someone else's presence did not leave her. She constantly heard footsteps in the forest, although she did not find any of the survivors." ,
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {//Look for your belongings
    id: 11,
    senderArr: ['Oh...', 'Here is a lot of things', 'I’ll try to find something', 'I guess', 'I found my bag', 'Oh', 'My laptop is broken', 'I don’t think, that it can help me', 
    'I leave my bag here', 'And go to the forest'],
    delayArr: [3000, 3000, 30000],
    answersArr: [],
    nextQuestId: [13],
    alert: "“Realizing that there was nowhere to find help, Taylor decided to go through the forest to the railroad tracks and move further along them." +
    "The feeling of someone else's presence did not leave her. She constantly heard footsteps in the forest, although she did not find any of the survivors.",
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {
    id: 13,
    senderArr: ['It’s so dark here', 'I can’t see anything', 'I hear some noises', 'And footsteps', 'I hope, that somebody is alive'],
    delayArr: [],
    answersArr: ['Don’t pay attention', 'Shout “Is anybody here?”'],
    nextQuestId: [14, 103],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {//Don’t pay attention
    id: 14,
    senderArr: ['I’m hungry', 'I’ll try to find some food', 'I found some berries', 'They look normal'],
    delayArr: [3000, 30000],
    answersArr: ['Eat them', 'Don’t eat them'],
    nextQuestId: [102, 15],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {//Don’t eat them
    id: 15,
    senderArr: ['I still hear footsteps', 'Someone is chasing me', 'It’s getting closer', 'I’m so scared', 'I see something!', 'Some movement',
    'DAMN!', 'It’s really close', 'AAAAAAAA'],
    delayArr: [3000, 2000, 3000, 4000, 3000, 5000, 2000, 3000, 30000],
    answersArr: ['Hello?'],
    nextQuestId: [16],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {//Hello?
    id: 16,
    senderArr: [],
    delayArr: [],
    answersArr: ['Are you here?'],
    nextQuestId: [17],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {//Are you here?
    id: 17,
    senderArr: [],
    delayArr: [],
    answersArr: [],
    nextQuestId: [18],
    alert: '“Taylor stopped and held her breath. She realized that what was constantly following her was very close in the forest.' + 
    'The footsteps and noise of the branches approached very quickly. She had nowhere to run and seemed to have rooted in the ground.' + 
    'What was approaching from the forest jumped onto her and the last thing she saw was an ugly figure of something incomprehensible.' +
    'Taylor screamed and jumped, she opened her eyes and realized that she was on the train. It all turned out to be just a nightmare.”',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {
    id: 18,
    senderArr: [],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {
    id: 20,
    senderArr: ['Oh, I see someone', 'It getting closer'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [103],
    alert: '“Taylor stopped and held her breath. She realized that what was constantly following her was very close in the forest.' +
    'The footsteps and noise of the branches approached very quickly. She had nowhere to run and seemed to have rooted in the ground.' +
    'What was approaching from the forest jumped onto her and the last thing she saw was an ugly figure of something incomprehensible.' +
    'Taylor screamed and jumped, she opened her eyes and realized that she was on the train. It all turned out to be just a nightmare.”',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Pull out
    id: 101,
    senderArr: ['Auh', 'It’s soooo painful', 'But I’ll try', 'Okay, this shit is out', 'I’m not feeling good', 'It’s so much blood here', 'I think...', 'I...'],
    delayArr: [3000, 3000, 15000],
    answersArr: [],
    nextQuestId: [],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {//Eat them
    id: 102,
    senderArr: ['Okay', 'I feel strange', 'SHIT!', 'SPIDERS!', 'They are all over my body', 'HELP ME!'],
    delayArr: [30000],
    answersArr: [],
    nextQuestId: [],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}, {
    id: 103,
    senderArr: [],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    alert: '',
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, this.alert, prop);
    }
}];

async function createTransition (id, senderArr, delayArr, answersArr , nextQuestId, alert, prop) { 
    const obj = {
        id: id,
        senderArr: senderArr,
        delayArr: delayArr,
        answersArr: answersArr,
        nextQuestId: nextQuestId,
        alert: alert
    };
    try {
        const response = await fetch('/game3', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
    } catch (e) {
        console.log(e);
    }
}
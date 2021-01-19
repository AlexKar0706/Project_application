export const gameObject = [{//Start Game
    id: 0,
    senderArr: ['Hei', 'Someone is here?', 'Help me', 'Plz', 'I dnt know', 'Where i am'],
    delayArr: [],
    answersArr: ['Who are you?', 'Describe what you see'],
    nextQuestId: [1, 2],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Who are you?
    id: 1,
    senderArr: ['Halp! I dont remember', 'Please help', 'Im scared'],
    delayArr: [],
    answersArr: ['Describe what you see'],
    nextQuestId: [2],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Describe what you see
    id: 2,
    senderArr: ['So dark', 'I cannot see', 'Wait', 'Here is window', 'I think itss night', 'I see table', 'Cupboard', 'Door...'],
    delayArr: [],
    answersArr: ['Search the table', 'Search the cupboard', 'Open the door'],
    nextQuestId: [3, 5, 4],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Search the table
    id: 3,
    senderArr: ['I see something', 'Its a medical record', 'Wait', 'Its mine', 'Why?'],
    delayArr: [],
    answersArr: ['Search the cupboard', 'Open the door'],
    nextQuestId: [5, 4],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Open the door
    id: 4,
    senderArr: ['OK, ill try', 'I guess, its hospital', 'Its all white', 'But i cannot see anyone',
                'Its empty', 'I try to find exit', 'Right or left?'],
    delayArr: [30000],
    answersArr: ['Right', 'Left'],
    nextQuestId: [98, 99],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Search the cupboard
    id: 5,
    senderArr: ['Oh', 'I see', 'Here is mop'],
    delayArr: [],
    answersArr: ['Take it', 'Open the door'],
    nextQuestId: [6, 4],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Take it
    id: 6,
    senderArr: ['Ill try open the door', 'I guess, its hospital', 'Its all white', 'But i cannot see anyone',
                'Its empty', 'I try to find exit', 'Right or left?'],
    delayArr: [],
    answersArr: ['Right', 'Left'],
    nextQuestId: [98, 97],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
},{//Use the mop
    id: 7,
    senderArr: ['Ill try', 'Wow', 'It worked', 'I guess shes out',
                'I go further', 'Hei', 'Are you still here'],
    delayArr: [3000, 3000, 3000, 3000, 30000],
    answersArr: ['Yes'],
    nextQuestId: [8],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Yes
    id: 8,
    senderArr: ['I found kitchen'],
    delayArr: [],
    answersArr: ['What you see?', 'Don’t waste time, go further'],
    nextQuestId: [9, 96],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//What you see?
    id: 9,
    senderArr: ['I see table', 'Fridge', 'I see knives', 'A lot'],
    delayArr: [],
    answersArr: ['Take the knife', 'Search the fridge', 'Search the table'],
    nextQuestId: [95, 11, 10],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Search the table
    id: 10,
    senderArr: ['Its empty'],
    delayArr: [],
    answersArr: ['Take the knife', 'Search the fridge'],
    nextQuestId: [95, 11],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Search the fridge
    id: 11,
    senderArr: ['Well', 'I see', 'Eggs', 'Milk', 'Meat', 'Lemons', 'Damn i want to eat'],
    delayArr: [],
    answersArr: ['Drink milk', 'Take meat', 'Go further'],
    nextQuestId: [12, 13, 96],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Drink milk
    id: 12,
    senderArr: ['Thanks', 'Yeak', 'Its bad', 'I think its expired'],
    delayArr: [],
    answersArr: ['Take meat'],
    nextQuestId: [13],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Take meat
    id: 13,
    senderArr: ['Ok, but why?', 'Fine', 'i ll take it', 'Oh', 'I see the door', 'I think its exit', 'Its opened!',
                'Wait', 'I hear some noize', 'Fuuuck', 'Dogs'],
    delayArr: [30000],
    answersArr: ['Use meat', 'Run'],
    nextQuestId: [14, 103],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Use meat
    id: 14,
    senderArr: ['Oh', 'Ok', 'I throw it ', 'Dogs are distracted', 'Oh, they ran away', 'I see the forest'],
    delayArr: [],
    answersArr: ['Go back', 'Run into forest'],
    requiredId: async function () {
        var state = await getUserState()
        for (let i = 0; i<state.level1.length; i++) 
            if (state.level1[i].questId == 12) return 106;
        return 15;
    }, 
    nextQuestId: [105],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Run into forest
    id: 15,
    senderArr: ['Ok', 'Shit', 'I see lights', 'They coming for me', 'Oh', 'I see the road', 'I hear cars',
                'I hope', 'They help me', 'I catched the car', 'Im safe now', 'Thank you'],
    delayArr: [30000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 30000],
    answersArr: [], 
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Take the knife
    id: 95,
    senderArr: ['Ok', 'OK, i see the exit', 'Wait...', 'I hear some noize', 'Fuuuck', 'Dogs'],
    delayArr: [3000, 30000],
    answersArr: ['Use the knife', 'Run'],
    nextQuestId: [104, 103],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Don’t waste time, go further
    id: 96,
    senderArr: ['Ok', 'Oh', 'I see the door', 'Its opened!', 'Wait...', 'I hear some noize', 'Fuuuck', 'Dogs'],
    delayArr: [],
    answersArr: ['Use the mop', 'run'],
    nextQuestId: [102, 103],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Left with the mop
    id: 97,
    senderArr: ['Oh i see door', 'Ill check it', 'Wow', 'Its open', 'Oh fuck', 'DOGS', 'Ill try use the mop',
                'Fuck', 'Too many', 'I cant'],
    delayArr: [],
    answersArr: ['Run'],
    nextQuestId: [100],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Right
    id: 98,
    senderArr: ['Oh i see someone', 'It s nurse', 'Oh fuck', 'She wants to grab me', 'She has something in her arms'],
    delayArr: [],
    requiredState: async function () {
                            var state = await getUserState()
                            for (let i = 0; i<state.level1.length; i++) 
                                if (state.level1[i].questId == 6) return 'Use the mop';
                            return;
                        }, 
    answersArr: ['Run'],
    nextQuestId: [101, 7],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Left
    id: 99,
    senderArr: ['Oh i see door', 'Ill check it', 'Wow', 'Its open', 'Oh fuck', 'DOGS'],
    delayArr: [],
    answersArr: ['Run'],
    nextQuestId: [100],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {
    id: 100,
    senderArr: ['Sht', 'damn', 'ffck', 'Aaaaa'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {
    id: 101,
    senderArr: ['Ill try', 'Oh fuck', 'mozherfucker', 'I tripped over the chair', 'My leg', 'Hurts', 'Aaaaaaaaaaaa'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {
    id: 102,
    senderArr: ['I lost it', 'Fuck', 'Shit'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {
    id: 103,
    senderArr: ['They comming', 'AaAAAAA', 'It bite me', 'It hurts', 'They bite me agai', 'AAAAaaa'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Use the knife
    id: 104,
    senderArr: ['Yey, i got one ', 'I try to kill another', 'Fuck', 'Shit', 'Too many dogs', 'I cant', 'aaaaaaa'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Go back
    id: 105,
    senderArr: ['SHIT', 'Nurse is alive', 'She has a mop', 'Fuck'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Run into forest
    id: 106,
    senderArr: ['Ok', 'Shit', 'I see lights', 'They coming for me', 'Oh', 'I see the road', 'Fuck',
                'My stomac hurts', 'So bad', 'Its milk', 'I cant', 'Run'],
    delayArr: [10000],
    answersArr: [], 
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}];

async function createTransition (id, senderArr, delayArr, answersArr , nextQuestId, prop) {
    const specialAnswer = gameObject.find(obj => {
        if(obj.id == id && obj.requiredState) return obj; 
    });
    if (specialAnswer) {
        const reqState = await specialAnswer.requiredState()
        if (reqState) answersArr.push(reqState);
    }
    const specialId = gameObject.find(obj => {
        if(obj.id == id && obj.requiredId) return obj; 
    });
    if (specialId) {
        const reqId = await specialId.requiredId();
        if (reqId) nextQuestId.push(reqId);
    }
    const obj = {
        id: id,
        senderArr: senderArr,
        delayArr: delayArr,
        answersArr: answersArr,
        nextQuestId: nextQuestId
    };
    try {
        const response = await fetch('/game', {
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

async function getUserState () {
    try {
        const response = await fetch('/game', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        return json;
    } catch (e) {
        console.log(e);
    }    
}
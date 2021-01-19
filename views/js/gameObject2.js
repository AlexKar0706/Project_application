export const gameObject2 = [{
    id: 1,
    senderArr: ['Hello?', 'Do you get my message?', 'I’m...', 'Oh', 'I don’t remember anything', 'Are you here?'],
    delayArr: [],
    answersArr: ['How did you find my number?', 'What’s happend?'],
    nextQuestId: [2, 3],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//How did you find my number?
    id: 2,
    senderArr: ['I called emergency', 'And got this chat', 'I cannot use different number'],
    delayArr: [],
    answersArr: ['What’s happend?'],
    nextQuestId: [3],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//What’s happend?
    id: 3,
    senderArr: ['I’m in the car', 'My head is acking', 'I don’t remember anything...', 'I...', 'Need to go home'],
    delayArr: [],
    answersArr: ['Find your documents', 'Get out of the car', 'Can you remember anything else?'],
    nextQuestId: [4, 51, 71],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Find your documents
    id: 4,
    senderArr: ['Okey', 'I found something', 'My name is Megan Smith'],
    delayArr: [30000],
    answersArr: ['Search the glove box', 'Search the trunk', 'Get out of the car'],
    nextQuestId: [5, 6, 51],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
},  {//Search the glove box
    id: 5,
    senderArr: ['Okey', 'I found keys', 'I think they are from my home', 'Oh wait', 'I see something...', 'It’s address', '221b Baker Street'],
    delayArr: [],
    answersArr: ['Search the trunk', 'Look outside'],
    nextQuestId: [6, 7],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Search the trunk
    id: 6,
    senderArr: ['Okey, i’ll try', 'SHIT', 'Here is a body', 'It’s a girl'],
    delayArr: [30000],
    answersArr: ['Calm down and search the body'],
    nextQuestId: [101],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Look outside
    id: 7,
    senderArr: ['I’ll go out of the car', 'It looks like a car accident', 'I’m in some living area', 'It seems very familiar',
                'There’s no one outside', 'Like the town is empty', 'Interesting', 'How long did I spend in the car?', 'I’m hungry', 
                'I think it’s my area', 'I’m not sure'],
    delayArr: [30000],
    answersArr: ['Try to remember', 'Look at the keys'],
    nextQuestId: [8, 9],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Try to remember
    id: 8,
    senderArr: ['Hmm...', 'I guess, i remember something', 'YES!', 'I remember this house', 'It’s my neighbours house'],
    delayArr: [],
    answersArr: ['Look at the keys'],
    nextQuestId: [9],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Look at the keys
    id: 9,
    senderArr: ['It’s Baker street', 'Oh, i see road sign', 'It also Baker street', 'Wait', 'I remember this house', 'It’s my neighbours house',
                'So my house should be right around the corner', 'I found my house', 'I opened the door', 'But it’s empty', 'On the first floor'],
    delayArr: [3000, 3000, 3000, 3000, 3000, 3000, 30000],
    answersArr: ['Go upstairs', 'Look around'],
    nextQuestId: [10, 18],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Go upstairs
    id: 10,
    senderArr: ['Okey', 'I hear something', 'Oh', 'It’s some old lady', 'She said, that she is my granny'],
    delayArr: [30000],
    answersArr: ['Ask your granny about the empty town', 'Ask where is the rest of the family'],
    nextQuestId: [11, 14],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Ask your granny about the empty town'
    id: 11,
    senderArr: ['She doesn’t understand', 'Everything is okey', 'She saw today a friend', 'It’s weird', 'I’m sure. That there were no one outside',
                'Maybe it’s after a car crash', 'I didn’t notice anyone', 'Granny suggested to drink tea'],
    delayArr: [3000, 4000, 3000, 5000, 2000, 3000, 30000],
    answersArr: ['Drink tea with granny', 'Maybe you should be cautious?'],
    nextQuestId: [13, 12],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Maybe you should be cautious?
    id: 12,
    senderArr: ['I think you are overthinking', 'I’ll go and drink tea with my granny', 'I need to calm down'],
    delayArr: [],
    answersArr: ['Drink tea with granny'],
    nextQuestId: [13],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Drink tea with granny
    id: 13,
    senderArr: ['I’ll go and drink tea with my granny', 'I need to calm down', 'You know', 'Granny is weird', 'She acts very strange', 
    'She tells stories, that I don’t remember', 'And I heard some noises', 'But she didn’t hear them', 'Maybe she has problems with hearing'],
    delayArr: [3000, 90000],
    answersArr: ['Ask where is the rest of the family', 'Turn on the TV'],
    nextQuestId: [14, 15],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Ask where is the rest of the family
    id: 14,
    senderArr: ['She says, that all of them are gone', 'For the weekend', 'She is alone here', 'But it’s strange', 'I saw the car near the house', 
    'Granny doesn’t use the car', 'How did they manage to go away without a car?', 'I’ll go and turn on the TV', 'I need to be sure that everything is fine', 'I’ll watch news'],
    delayArr: [],
    answersArr: ['Turn on the TV'],
    nextQuestId: [15],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Turn on the TV
    id: 15,
    senderArr: ['I’ll go and turn on the TV', 'I need to be sure that everything is fine', 'I’ll watch news', 'Fuck', 'What’s going on?', 'They say, that there is some kind of a monster',
    'Monster kills people and takes their faces. Then he finds another victim and kills it. And that’s going over and over again. Almost all people in the town are killed.', 
    'Do you know something about it?'],
    delayArr: [3000, 3000, 30000, 3000, 3000, 10000],
    answersArr: ['No'],
    nextQuestId: [16],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//No
    id: 16,
    senderArr: ['I need to get fresh air. ', 'To clean my mind', 'Granny doesn’t want me to go outside', 'It’s dangerous out there'],
    delayArr: [3000, 15000],
    answersArr: ['Go out', 'Look around the house'],
    nextQuestId: [102, 17],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Look around the house
    id: 17,
    senderArr: ['The house is very big', 'I need some time to look everywhere', 'But maybe it helps me to remember more', 'House seems normal', 
    'But i could not get into the basement', 'The door is locked', 'I guess I heard something behind the door', 'I try to find the key',
    'Found it', 'I hope that it’s just my imagination'],
    delayArr: [3000, 3000, 90000, 3000, 3000, 3000, 3000, 15000],
    answersArr: ['Open the door', 'Where is your granny?'],
    nextQuestId: [103, 104],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Look around
    id: 18,
    senderArr: ['I’m in the hallway', 'Oh, I see newspapers', 'They are two days old', 'Wait...', 'I was in the car for two days???', 'Oh god...',
    'Fuck', 'What’s going on?', 'They say, that there is some kind of a monster',
    'Monster kills people and takes their faces. Then he finds another victim and kills it. And that’s going over and over again. Almost all people in the town are killed.',
    'Do you know something about it?'],
    delayArr: [],
    answersArr: ['No'],
    nextQuestId: [20],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//No
    id: 20,
    senderArr: ['I’ll need something to drink', 'Oh I see kitchen', 'The fridge is full with food', 'I see fried fish', 'Oh I’m so hungry'],
    delayArr: [3000, 15000],
    answersArr: ['Eat fish', 'Don’t eat fish'],
    nextQuestId: [21, 29],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Eat fish
    id: 21,
    senderArr: ['That’s better', 'I see knives, plates...'],
    delayArr: [],
    answersArr: ['Take the knife'],
    nextQuestId: [22],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Take the knife
    id: 22,
    senderArr: ['Okay...', 'I hear noises upstairs', 'I’ll go and check it', 'Oh', 'It’s some old lady', 'She said, that she is my granny'],
    delayArr: [3000, 3000, 30000],
    answersArr: ['Ask your granny about the empty town', 'Ask where is the rest of the family'],
    nextQuestId: [23, 26],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Ask your granny about the empty town
    id: 23,
    senderArr: ['She doesn’t understand', 'Everything is okey', 'She saw today a friend', 'It’s weird', 'I’m sure. That there were no one outside',
                'Maybe it’s after a car crash', 'I didn’t notice anyone', 'You know', 'Granny is weird', 'She acts very strange', 'She tells stories, that I don’t remember',
                'And I heard some noises', 'But she didn’t hear them', 'Maybe she has problems with hearing', 'Granny suggested to drink tea'],
    delayArr: [3000, 4000, 3000, 5000, 2000, 3000, 30000, 3000, 3000, 3000, 2000, 4000, 3000, 15000],
    answersArr: ['Drink tea with granny', 'Maybe you should be cautious?'],
    nextQuestId: [25, 24],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Maybe you should be cautious?
    id: 24,
    senderArr: ['I think you are right', 'My granny can be the monster', 'I need to act normal', 'And get more information'],
    delayArr: [],
    answersArr: ['Drink tea with granny'],
    nextQuestId: [25],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Drink tea with granny
    id: 25,
    senderArr: ['She’s really weird', 'She doesn’t know where the tea is', 'She looked everywhere', 'But the package of tea is right in front of her'],
    delayArr: [],
    answersArr: ['Ask where is the rest of the family'],
    nextQuestId: [26],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Ask where is the rest of the family
    id: 26,
    senderArr: ['She says, that all of them are gone', 'For the weekend', 'She is alone here', 'But it’s strange', 'I saw the car near the house', 
    'Granny doesn’t use the car', 'How did they manage to go away without a car?'],
    delayArr: [],
    answersArr: ['Go out', 'Look around the house'],
    nextQuestId: [105, 27],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Look around the house
    id: 27,
    senderArr: ['The house is very big', 'I need some time to look everywhere', 'But maybe it helps me to remember more', 'House seems normal', 
    'But i could not get into the basement', 'The door is locked', 'I guess I heard something behind the door', 'I try to find the key',
    'Found it', 'I hope that it’s just my imagination'],
    delayArr: [3000, 3000, 90000, 3000, 3000, 3000, 3000, 15000],
    answersArr: ['Open the door', 'Where is your granny?'],
    nextQuestId: [28, 104],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Open the door
    id: 28,
    senderArr: ['Okay', 'It’s dark here', 'I go downstairs', 'Wait', 'I think I see something', 'Oh my god!', 'That’s my parents', 'But granny told, that they are gone',
    'What...', 'I tried to free them', 'I cut the ropes', 'They say, that monster attacked our house', 'And killed granny', 'They should be next', 'OH',
    'I hear something', 'Monster is coming!', 'My stomach hurts', 'So bad'],
    delayArr: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 30000],
    answersArr: ['Ask parents to help', 'Fight alone'],
    nextQuestId: [106, 107],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Don’t eat fish
    id: 29,
    senderArr: ['I see knives, plates...'],
    delayArr: [],
    answersArr: ['Take the knife'],
    nextQuestId: [30],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Take the knife
    id: 30,
    senderArr: ['Okay...', 'I hear noises upstairs', 'I’ll go and check it', 'Oh', 'It’s some old lady', 'She said, that she is my granny'],
    delayArr: [3000, 3000, 30000],
    answersArr: ['Ask your granny about the empty town', 'Ask where is the rest of the family'],
    nextQuestId: [31, 34],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Ask your granny about the empty town
    id: 31,
    senderArr: ['She doesn’t understand', 'Everything is okey', 'She saw today a friend', 'It’s weird', 'I’m sure. That there were no one outside',
                'Maybe it’s after a car crash', 'I didn’t notice anyone', 'You know', 'Granny is weird', 'She acts very strange', 'She tells stories, that I don’t remember',
                'And I heard some noises', 'But she didn’t hear them', 'Maybe she has problems with hearing', 'Granny suggested to drink tea'],
    delayArr: [3000, 4000, 3000, 5000, 2000, 3000, 30000, 3000, 3000, 3000, 2000, 4000, 3000, 15000],
    answersArr: ['Drink tea with granny', 'Maybe you should be cautious?'],
    nextQuestId: [33, 32],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Maybe you should be cautious?
    id: 32,
    senderArr: ['I think you are right', 'My granny can be the monster', 'I need to act normal', 'And get more information'],
    delayArr: [],
    answersArr: ['Drink tea with granny'],
    nextQuestId: [33],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Drink tea with granny
    id: 33,
    senderArr: ['She’s really weird', 'She doesn’t know where the tea is', 'She looked everywhere', 'But the package of tea is right in front of her'],
    delayArr: [],
    answersArr: ['Ask where is the rest of the family'],
    nextQuestId: [34],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Ask where is the rest of the family
    id: 34,
    senderArr: ['She says, that all of them are gone', 'For the weekend', 'She is alone here', 'But it’s strange', 'I saw the car near the house', 
    'Granny doesn’t use the car', 'How did they manage to go away without a car?'],
    delayArr: [],
    answersArr: ['Go out', 'Look around the house'],
    nextQuestId: [105, 35],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Look around the house
    id: 35,
    senderArr: ['The house is very big', 'I need some time to look everywhere', 'But maybe it helps me to remember more', 'House seems normal', 
    'But i could not get into the basement', 'The door is locked', 'I guess I heard something behind the door', 'I try to find the key',
    'Found it', 'I hope that it’s just my imagination'],
    delayArr: [3000, 3000, 90000, 3000, 3000, 3000, 3000, 15000],
    answersArr: ['Open the door', 'Where is your granny?'],
    nextQuestId: [36, 104],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Open the door
    id: 36,
    senderArr: ['Okay', 'It’s dark here', 'I go downstairs', 'Wait', 'I think I see something', 'Oh my god!', 'That’s my parents', 'But granny told, that they are gone',
    'What...', 'I tried to free them', 'I cut the ropes', 'They say, that monster attacked our house', 'And killed granny', 'They should be next', 'OH',
    'I hear something', 'Monster is coming!'],
    delayArr: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 30000],
    answersArr: ['Ask parents to help', 'Fight alone'],
    nextQuestId: [98, 108],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Get out of the car
    id: 51,
    senderArr: ['I’m out'],
    delayArr: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 30000],
    answersArr: ['Search the trunk', 'Look outside'],
    nextQuestId: [6, 52],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Look outside
    id: 52,
    senderArr: ['I’ll look around', 'It looks like a car accident', 'I’m in some living area', 'I’ll try to find somebody '],
    delayArr: [30000],
    answersArr: ['Go to the first house', 'Stay on the road'],
    nextQuestId: [53, 110],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Go to the first house
    id: 53,
    senderArr: ['The lights are off', 'And nobody opened the door', 'It’s so strange', 'There’s no one outside', 'Like the town is empty',
    'Interesting', 'How long did I spend in the car?', 'I’m hungry', 'I think it’s my area', 'I’m not sure'],
    delayArr: [],
    answersArr: ['Try to find somebody'],
    nextQuestId: [109],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Can you remember anything else?
    id: 71,
    senderArr: ['I can’t...', 'My head hurts so bad...', 'But I try...', 'Oh...', 'Okay',
    'I think, I remember something', 'Documents...', 'I should find them!', 'I found something', 'My name is Megan Smith'],
    delayArr: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 30000],
    answersArr: ['Search the glove box', 'Search the trunk', 'Get out of the car'],
    nextQuestId: [5, 6, 51],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Ask parents to help VICTORY
    id: 98,
    senderArr: [],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Calm down and search the body 
    id: 101,
    senderArr: ['I don’t want to', 'But okey'],
    delayArr: [3000, 30000],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Go out
    id: 102,
    senderArr: ['God...', 'Granny shut the door and took my keys', 'I don’t understand, why she acts like that', 'She keeps telling, that it’s dangerous out there',
    'What...', 'Wait...', 'I tried to take keys back', 'But granny is so strong', 'I don’t understand', 'She’s coming to me really close...'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Open the door
    id: 103,
    senderArr: ['Okey', 'It’s dark here', 'I go downstairs', 'Wait', 'I think I see something', 'Oh my god!', 'That’s my parents', 'But granny told, that they are gone',
    'What...', 'I tried to free them', 'But the ropes are to tight', 'OH', 'I hear something', 'It’s granny...', 'Wait...', 'It’s impossible', 'Granny?', 'She is the monster!', 'Noooo'],
    delayArr: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 30000],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Where is your granny?
    id: 104,
    senderArr: ['I don’t know', 'She was in the living room', 'Strange', 'She’s not here', 'Oh, I hear steps', 'What...'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Go out 26
    id: 105,
    senderArr: ['I need fresh air', 'And time to think', 'God...', 'Granny shut the door and took my keys', 'She keeps telling, that it’s dangerous out there',
    'She doesn’t want to give my keys back', 'I tried to take keys back', 'But granny is so strong', 'She’s trying to attack me', 'Shit'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Ask parents to help 28
    id: 106,
    senderArr: [],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Fight alone 28
    id: 107,
    senderArr: [],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Fight alone 36
    id: 108,
    senderArr: [],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Try to find somebody
    id: 109,
    senderArr: ['Okay, I’ll try', 'Oh', 'I see somebody', 'I try to talk with him', 'Wait...', 'He has a gun', 'WHAT?!'],
    delayArr: [30000],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}, {//Stay on the road
    id: 110,
    senderArr: ['Oh, i’m so scared', 'I think, that I have a panic attack', 'What should I do?', 'I can’t stay', 'I need to find somebody', 'HELP!'],
    delayArr: [],
    answersArr: [],
    nextQuestId: [],
    func: function (prop) {
        createTransition (this.id, this.senderArr, this.delayArr, this.answersArr, this.nextQuestId, prop);
    }
}];

async function createTransition (id, senderArr, delayArr, answersArr , nextQuestId, prop) { 
    const obj = {
        id: id,
        senderArr: senderArr,
        delayArr: delayArr,
        answersArr: answersArr,
        nextQuestId: nextQuestId
    };
    try {
        const response = await fetch('/game2', {
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
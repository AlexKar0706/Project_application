const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    level1: [{
        questId: Number,
        sender: Array,
        answers: Array,
        playerAnswer: String,
        nextQuestId: Array,
        alert: String
    }],
    level2: [{
        questId: Number,
        sender: Array,
        answers: Array,
        playerAnswer: String,
        nextQuestId: Array,
        alert: String
    }],
    level3: [{
        questId: Number,
        sender: Array,
        answers: Array,
        playerAnswer: String,
        nextQuestId: Array,
        alert: String
    }],
    readedMesseges: Number
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
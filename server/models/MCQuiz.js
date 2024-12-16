const mongoose = require('mongoose');

const mcquizSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    difficultyLevel: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    correctAnswer: {    
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('mcquizzes', mcquizSchema);
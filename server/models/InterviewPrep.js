const mongoose = require('mongoose');

const interviewSchema = mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
    }
)

module.exports = mongoose.model('interviewquestion', interviewSchema);
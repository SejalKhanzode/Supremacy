const mongoose = require('mongoose');

const programmingQueSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        topic: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        difficultyLevel: {
            type: String,
            required: true,
        },
        sampleInput: {
            type: String,
            required: true,
        },
        sampleOutput: {
            type: String,
            required: true,
        },     
    }
)

module.exports= mongoose.model('programmingQue', programmingQueSchema);
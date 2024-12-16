const mongoose = require('mongoose');

const quesSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: {type:String,
            required:true
        },
        
        views: {
            type: Number,
            default: 0,
        },
        likes: {
            type: Number,
            default: 0,
        },
        answers: {
            type: Number,
            default: 0,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        created_on: {
            type: Date,
            default: Date.now(),
        }
    }
)

module.exports = mongoose.model('questions', quesSchema);
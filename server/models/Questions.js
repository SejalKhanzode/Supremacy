const mongoose = require('mongoose');

const quesSchema = mongoose.Schema(
    {
        question: {
            type: String,
            required: true
        },
        description: {type:String,
            required:true
        },
        likes: {
            type: Number,
            default: 0,
        },
        comments: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comments",
        },
        // user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "users",
        // },
        created_on: {
            type: Date,
            default: Date.now(),
        }
    }
)

module.exports = mongoose.model('questions', quesSchema);
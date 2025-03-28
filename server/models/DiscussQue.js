const mongoose = require('mongoose');

const discussQueSchema = mongoose.Schema(
    {
        question: {
            type: String,
            required: true
        },
        description: {type:String,
            required:true
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "DiscussLike",
        }],
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "DiscussComment",
        }],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        created_on: {
            type: Date,
            default: Date.now(),
        }
    }
)

module.exports = mongoose.model('DiscussQue', discussQueSchema);
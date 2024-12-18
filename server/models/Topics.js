// Import the Mongoose library
const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
    {
        topicName: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ["Data Structure", "Algorithm"],
            required: true
        },
        description: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
        },
        file: {
            type: String,
        },
        subTopicContent: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: "subTopic"
        }],
        mcquizContent: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: "mcquiz"
        }],
        feedback: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: "feedback"
        }],
    },
);

module.exports = mongoose.model('topics', topicSchema);

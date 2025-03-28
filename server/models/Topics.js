
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
        topicDesc: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
        },
        file: {
            type: String,
        },
        advantages: {
            type: String,
            required:false
        },
        disadvantages: {
            type: String,
            required: false
        },
        applications: {
            type: String,
            required: false
        },
        subTopicContent: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: "subTopic"
        }],
       
    },
);

module.exports = mongoose.model('topics', topicSchema);

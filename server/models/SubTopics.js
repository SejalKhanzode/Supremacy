const mongoose = require('mongoose')

const subTopicSchema = new mongoose.Schema(
    {
        topicName: {
            type: String,
            required: true
        },
        topicDescription: {
            type: String,
            required: true
        },
        ccode: {
            type: String
        },
        cppcode: {
            type: String
        },
        javacode: {
            type: String
        }
    },
);

module.exports = mongoose.model('subtopics', subTopicSchema);
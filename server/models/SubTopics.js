const mongoose = require('mongoose')

const subTopicSchema = new mongoose.Schema(
    {
        subTopicName: {
            type: String,
            required: true
        },
        subTopicDescription: {
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
        },
        file:{
            type:String
        }
    },
);

module.exports = mongoose.model('subTopic', subTopicSchema);
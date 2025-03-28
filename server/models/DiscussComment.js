const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema(
    {
           discussQue:{
               type: mongoose.Schema.Types.ObjectId,
               ref: "DiscussQue", 
           },
           user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", 
           },
           comment: {
               type:String,
               required:true,
           }    }
)

module.exports = mongoose.model('DiscussComment', commentsSchema);
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    gender:{
        type:String,
        enum:["Male", "Female", "Other"],
        require:true,
    },
    dateOfBirth:{
        type:String,
        require :true
    },
    about:{
        type:String,
        trim:true,
    },
    contactNumber:{
        type:Number,
require:true
    }
})

module.exports = mongoose.model("Profile", profileSchema)
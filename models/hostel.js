const { uniq } = require("lodash");
const mongoose = require("mongoose");
const hostelSchema = new mongoose.Schema({
    hostelname:{
        type:String,
        required: true
    },
    room:{
        type: Number,
        required: true
    },
    hostelnumber:{
        type:Number,
        unique: true
    },
    address:{
        type: String,
        required: true
    }
});

const hostel = mongoose.model("hostel",hostelSchema);
module.exports = hostel;
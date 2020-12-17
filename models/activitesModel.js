const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const activitiesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    time: {
        type: String,
    },
    interval: {
        type: String,
        required: true

    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    selectedContact: {
        type: String, 
        required: true
    }


});

const Activities = mongoose.model("Activities", activitiesSchema);
module.exports = Activities   
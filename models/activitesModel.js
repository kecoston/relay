const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const activitiesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    interval: {
        type: String,
        required: true

    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    contactId: {
        type: String, 
        required: true
    }


});

const Activities = mongoose.model("Activities", activitiesSchema);
module.exports = Activities   
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const activitiesSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    interval: {
        type: String,
        required: true

    },
    selectedContact: {
        type: String, 
        required: true
    }


});

const Activities = mongoose.model("Activities", activitiesSchema);
module.exports = Activities   
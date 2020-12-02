const mongoose = require("mongoose);
const Schema = mongoose.Schema;


const activitiesSchema = new mongoose.Schema({
    time: {
        type:
        
    },
    intervals: {

    },
    selectedContact: {

    }


});

const Activities = mongoose.model("Activities", activitiesSchema);
module.exports = Activities   
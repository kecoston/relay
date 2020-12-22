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
    workoutSummary: [{
        type: Schema.Types.ObjectId,
        ref: "workoutSummary"
    }],
    contacts: [{
        type: Schema.Types.ObjectId,
        ref: "contactId"
    }]

});

const Activities = mongoose.model("Activities", activitiesSchema);
module.exports = Activities   
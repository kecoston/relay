const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSummarySchema = new mongoose.Schema({
    workoutId: {
        type: String,
        required: true 
    },
    totalTime: {
        type: String,
    },

});

const WorkoutSummary = mongoose.model("Workout Summary", workoutSummarySchema);
module.exports = WorkoutSummary   
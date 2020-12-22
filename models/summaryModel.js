const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSummarySchema = new mongoose.Schema({
    totalTime: {
        type: String,
    },
    activities: [{
        type: Schema.Types.ObjectId,
        ref: "activity"
    }]
});

const WorkoutSummary = mongoose.model("Workout Summary", workoutSummarySchema);
module.exports = WorkoutSummary   
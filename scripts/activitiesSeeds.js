const mongoose = require("mongoose");
const db = require("../models/")


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/relay",
);

const activitySeeds = [
    {
      title: "After Lunch Walk",
      interval: "00:10:00",
      contactId: "5fdba6e89f87a81858c6c629"
    },
    {
      title: "Morning Run",
      interval: "00:10:00",
      contactId: "5fdba6e89f87a81858c6c629"
    }
  ];


db.Activities.collection.insertMany(activitySeeds)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
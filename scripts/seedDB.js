const mongoose = require("mongoose");
const db = require("../models/")


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/relay",
);

const contactSeeds = [
  {
    firstName: "Katie",
    lastName: "Coston",
    phoneNumber: "281-773-2444"
  },
  {
    firstName: "Steven",
    lastName: "McDowell",
    phoneNumber: "281-772-8989"
  }
];

const activitySeeds = [
  {
    title: "After Lunch Walk",
    time: "00:30:00",
    interval: "00:10:00",
    selectedContact: "Katie Coston"
  },
  {
    title: "Morning Run",
    time: "01:30:00",
    interval: "00:10:00",
    selectedContact: "Katie Coston"
  }
];

const userSeeds = [
  {
    firstName: "Katie",
    lastName: "Coston",
    email: "kecoston",
    password: "testing123"
  }
]

db.Contacts.remove({})
  .then(() => db.Contacts.collection.insertMany(contactSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Activities.remove({})
  .then(() => db.Activities.collection.insertMany(activitySeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

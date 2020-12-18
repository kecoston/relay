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


db.Contacts.collection.insertMany(contactSeeds)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
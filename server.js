const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require('express-session')
const passport = require('./passport');
const routes = require("./routes")
const app = express();

const PORT = process.env.PORT || 3001;


// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Add routes, both API and view 
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/relay",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );
  
 
  // Send every request to the React app
  // Define any API routes before this runs
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
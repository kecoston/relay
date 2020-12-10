var bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

userSchema.pre('save', function (next) {
    if (!this.password) {
      console.log('models/user.js =======NO PASSWORD PROVIDED=======')
      next()
    } else {
      console.log('models/user.js hashPassword in pre save');
      // this.password = this.hashPassword(this.password)
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);

      next()
    }
  })


const User = mongoose.model("User", userSchema);
module.exports = User   
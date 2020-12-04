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

const User = mongoose.model("Contacts", contactSchema);
module.exports = User   
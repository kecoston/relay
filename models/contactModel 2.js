const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }


});

const Contacts = mongoose.model("Contacts", contactSchema);
module.exports = Contacts   
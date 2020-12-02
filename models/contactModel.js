const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const contactSchema = new mongoose.Schema({
    firstName: {

    },
    lastName: {

    },
    phoneNumber: {

    }


});

const Contacts = mongoose.model("Contacts", contactSchema);
module.exports = Contacts   
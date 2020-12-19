const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const contactsSchema = new mongoose.Schema({
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
    },
    activities: [{
        type: Schema.Types.ObjectId,
        ref: 'activity'
    }]


});

const Contacts = mongoose.model("Contacts", contactsSchema);
module.exports = Contacts   
import axios from "axios";

export default {
  // Gets all contacts
  getContacts: function () {
    return axios.get("/api/contacts");
  },
  // Gets the contact with the given id
  getContacts: function (id) {
    return axios.get("/api/contact/" + id);
  },
  // Deletes the contact with the given id
  deleteContacts: function (id) {
    return axios.delete("/api/contacts/" + id);
  },
  // Saves a contact to the database
  saveContact: function (contactData) {
    return axios.post("/api/contacts", contactData);
  },
  // Gets all activities
  getActivities: function () {
    return axios.get("/api/activities");
  },
  // Gets the activity with the given id
  getActivities: function (id) {
    return axios.get("/api/activity/" + id);
  },
  // Deletes the activity with the given id
  deleteActivities: function (id) {
    return axios.delete("/api/activity/" + id);
  },
  // Saves a activities to the database
  saveActivities: function (contactData) {
    return axios.post("/api/activities", contactData);
  }
};

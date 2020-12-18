import axios from "axios";

export default {
  // Gets all contacts
  getContacts: function () {
    return axios.get("/api/contacts/");
  },
  // Gets the contact with the given id
  getContact: function (id) {
    return axios.get("/api/contacts/" + id);
  },
  // Deletes the contact with the given id
  deleteContacts: function (id) {
    return axios.delete("/api/contacts/" + id);
  },
  // Saves a contact to the database
  saveContact: function (contactData) {
    return axios.post("/api/contacts", contactData);
  },
   ////////////////////////////////
  // Gets all activities
  getActivities: function () {
    return axios.get("/api/activities/");
  },
  // Gets the activity with the given id
  getActivity: function (id) {
    return axios.get("/api/activities/" + id);
  },
  // Deletes the activity with the given id
  deleteActivities: function (id) {
    return axios.delete("/api/activities/" + id);
  },
  // Saves a activities to the database
  saveActivities: function (activityData) {
    return axios.post("/api/activities", activityData);
  },
   ////////////////////////////////
  // Gets all summary
  getSummaries: function () {
    return axios.get("/api/summary/");
  },
  // Gets the summary with the given id
  getSummary: function (id) {
    return axios.get("/api/summary/" + id);
  },
  // Deletes the summary with the given id
  deleteSummary: function (id) {
    return axios.delete("/api/summary/" + id);
  },
  // Saves a summary to the database
  saveSummary: function (summaryData) {
    return axios.post("/api/summary", summaryData);
  }
};

import axios from "axios";

export default {
  // Gets all books
  getContacts: function() {
    return axios.get("/api/contacts");
  },
  // Gets the book with the given id
  getContact: function(id) {
    return axios.get("/api/contact/" + id);
  },
  // Deletes the book with the given id
  deleteContact: function(id) {
    return axios.delete("/api/contacts/" + id);
  },
  // Saves a book to the database
  saveContact: function(contactData) {
    return axios.post("/api/contacts", contactData);
  }
};

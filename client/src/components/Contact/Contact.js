import React, { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import MoodIcon from "@material-ui/icons/Mood";
//import Divider from "@material-ui/core/Divider";

import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Contact() {

  const [contacts, setContact] = useState([])

  useEffect(() => {
    loadContacts()
  }, [])

  function loadContacts() {
    API.getContacts()
      .then(res => 
        setContact(res.data)
      )
      .catch(err => console.log(err));
  };
  
 function deleteContacts(id) {
  API.deleteContacts(id)
    .then(console.log('deleted contact!'))
    .then(res => loadContacts()) 
    .catch(err => console.log(err));
  };
  
  const classes = useStyles();

    return (
      <div>
      {contacts.length ? (
      <List className={classes.root}>
        {contacts.map(contacts => 
        <ListItem key={contacts._id}>
          <ListItemAvatar>
            <Avatar>
              <MoodIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary= {contacts.firstName + " " + contacts.lastName} secondary={contacts.phoneNumber} />
          <DeleteBtn onClick={() => deleteContacts(contacts._id)} />
        </ListItem>
        )}
      </List>
      ) : (
        <p></p>
      )}
      </div>
    );
};

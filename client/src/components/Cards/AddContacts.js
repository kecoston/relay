import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Contact from '../Contact/Contact'
import API from '../../utils/API'
import TransitionsModal from "../Modal"

import "./style.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: "auto",
    padding: 20,
    textAlign: "center",
    marginTop: -60,
    marginRight: -40,
    borderRadius: 20,
    boxShadow: '0 3px 5px 2px rgba(75, 73, 73, 0.4)'
  },
});

export default function AddContacts() {
  const classes = useStyles();

  const [contacts, setContacts] = useState("");

  useEffect(() => {
   loadContacts()
  }, []);

  function loadContacts() {
    API.getContacts()
    .then(res =>
      setContacts(res.data)
      )
      .catch(err => console.log(err));
  };

  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="span" style={{color: "#58585F", letterSpacing: 1.5}}>
            Add Contacts
          </Typography>
          <hr />
          <Typography variant="body2" color="textSecondary" component="span">
         {!contacts ? (
           <h1>No Contacts to Display</h1>
         ) : ( 
          <div>
          {contacts.map(contact => {
           return (
            <Contact 
            key={contact._id} 
            firstName={contact.firstName} 
            lastName={contact.lastName} 
            phoneNumber={contact.phoneNumber}
            />
           );
         })}
      </div> 
       )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <TransitionsModal />
    </Card>
    
  );
  
}


import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from 'moment'
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function Activity({
  title,
  date,
  interval,
  contacts,
}) {

useEffect((contacts) => {
  API.getContact(contacts)
  .then(res => 
    getContact(res.data) 
  ).catch((err) => console.log(err))

}, []) 

  const classes = useStyles();
  const [contact, getContact] = React.useState()
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DirectionsRunIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary= {title} secondary={moment(date).format('MMM Do YYYY, h:mm:ss a')}/>
            </ListItem>
          </List>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            On {moment(date).format('MMM Do YYYY, h:mm:ss a')} you went for a insert time run and set {contact.firstName} as
            your emergency contact. You had messages sent to them every {interval}.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

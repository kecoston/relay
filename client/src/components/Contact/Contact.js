import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import MoodIcon from "@material-ui/icons/Mood";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Contact({
  firstName,
  lastName,
  phoneNumber
}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MoodIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary= {firstName + " " + lastName} secondary={phoneNumber} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  Card: {
    alignItems: "center",
    direction: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WorkoutDetails({
        interval, 
        firstName,
        lastName, 
        phoneNumber,
        title,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
      Workout Details
      </Typography>
        <Typography variant="h5" component="h2">
          Workout Title: {title} 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Relay Interval: {interval}
        </Typography>
        <Typography variant="body2" component="p">
          Emergency Contact: {firstName} {lastName}
          <br />
          {`Emergency Phone Number: ${phoneNumber}`}
        </Typography>
      </CardContent>

    </Card>
  );
}

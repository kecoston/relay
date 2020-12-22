import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
          Workout Details: {title} 
        </Typography>
        <Typography variant="body2" component="p">
          Emergency Contact: {firstName} {lastName}
          <br />
          Emergency Contact Phone Number: {phoneNumber}
          Message Interval: {interval}
          <br />
        </Typography>
      </CardContent>
     
    </Card>
  );
}

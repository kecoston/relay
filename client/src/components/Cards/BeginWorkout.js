import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WorkoutBtn from '../WorkoutBtn'
import "./card.css"





const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 300,
    padding: 20,
    textAlign: "center",
    marginTop: -60,
    marginRight: -40,
    borderRadius: 20,
    boxShadow: '0 3px 5px 2px rgba(75, 73, 73, 0.4)'
  }
});

export default function BeginWorkout() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="span" style={{color: "#58585F", letterSpacing: 1.5}}>
            Start your Workout
          </Typography>
          <hr />
          <WorkoutBtn />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


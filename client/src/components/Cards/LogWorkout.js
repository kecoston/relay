import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Activity from '../Activity/Activity'
import API from "../../utils/API"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 20,
    textAlign: "center",
    marginTop: -60,
    marginRight: -50,
    borderRadius: 20,
    boxShadow: '0 3px 5px 2px rgba(75, 73, 73, 0.4)'
  },
});

export default function LogWorkout() {
  const classes = useStyles();

  const [workouts, setWorkouts] = useState("");


  useEffect(() => {
    loadWorkouts()
  }, []);


  function loadWorkouts() {
    API.getActivities()
    .then(res => 
      setWorkouts(res.data)
      ).catch(err => console.log(err));
  };

  return (
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="span" style={{color: "#58585F", letterSpacing: 1.5}}>
            Log & Manage Activities
          </Typography>
          <hr />
          <Typography variant="body2" color="textSecondary" component="span">
           {!workouts ? (
             <h1>No Workouts Logged</h1>
           ) : (
          <div>
            {workouts.map(workout => {
              return (
                <Activity 
                key={workout._id}
                title={workout.title}
                date={workout.date}
                interval={workout.interval}
                contactId={workout.contactId}
                />
              );
            })}
          </div>
           )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


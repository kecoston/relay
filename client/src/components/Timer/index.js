import React, { useState } from "react";
import TimerDisplay from "../TimerDisplay"
import TimerBtn from "../TimerBtn"
import IconLabelButtons from "../Buttons"
import Geolocate from "../Geolocation"
import "./timer.css"
// import API from "../../utils/API";

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API

//Vonage requirements 
const VONAGE_SECRET = process.env.REACT_APP_VONAGE_SECRET
const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "044d053d",
  apiSecret: VONAGE_SECRET
})

let from = '14696913589'
let to = '8327731981'



function sendUpdate () {

  window.confirm("Your current location has been sent to your contact")
  
  let text = 'This is a message from Relay: this is *username* current location: *Location*'

  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
     
      console.log(err);
    } else {
      if (responseData.messages[0]['status'] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
      }
    }
  })

}



function Timer() {


//Geolocate 
const [latitude, setLatitude] = useState([""]);
const [longitude, setLongitude] = useState([""]);
const [userAddress, setAddress] = useState([""]);

// this.getLocation = this.getLocation.bind(this);
// this.getCoordinates = this.getCoordinates.bind(this)
// this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this)

function getLocation() {
  console.log("started geolocate")
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  setLatitude(position.coords.latitude)
  setLongitude(position.coords.longitude)
  console.log(position.coords.latitude, position.coords.longitude)

  if (this.latitude && this.longitude !== undefined) {
    reverseGeocodeCoordinates()
  }
}



function reverseGeocodeCoordinates() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=${GOOGLE_API_KEY}`)
    .then(response => response.json())
    .then(data => this.setAddress({
        userAddress: data.results[0].formatted_address
    }))
    .catch(error => alert("error"))

}

function handleLocationError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
         alert("User denied the request for Geolocation, make sure your location is allowed in browser.")
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.")
          break;
      }
}

const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
const [interv, setInterv] = useState();
const [status, setStatus] = useState(0);
// Not started = 0
// started = 1
// stopped = 2

const beginInterval = () => {
  setInterval(testing, 3000)
}

function testing () {
    getLocation()
  console.log("Test")
}

const start = () => {
  run();
  setStatus(1);
  setInterv(setInterval(run, 10));
  startSMS()
  beginInterval()
};

function startSMS () {
  let text = 'This message is from Relay!  It is to notify you that *User Name* has begun a workout. Their starting location is: *Location*'

  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
     
      console.log(err);
    } else {
      if (responseData.messages[0]['status'] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
      }
    }
  })

}

var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

const run = () => {
  if (updatedM === 60) {
    updatedH++;
    updatedM = 0;
  }
  if (updatedS === 60) {
    updatedM++;
    updatedS = 0;
  }
  if (updatedMs === 100) {
    updatedS++;
    updatedMs = 0;
  }
  updatedMs++;
  return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
};



function pauseSMS () {
   
  var questPause = window.confirm("Would you like to notify your contact that you have paused your workout?");
  
  if (questPause === true) {
  let text = 'This is to notify you that *User Name* has paused their workout. They are located here: *Location*'

  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      
      console.log(err);
    } else {
      if (responseData.messages[0]['status'] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
      }
    }
  })
}

}

const pause = () => {
  clearInterval(interv);
  setStatus(2);
  pauseSMS()
  clearInterval(beginInterval)
};

function resetSms () {

  var questRest = window.confirm("Would you like to notify your contact that you have reset your workout?")
  if(questRest === true) {
  let text = 'This is to notify you that *User Name* has reset their workout timeclock.'

  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      
      console.log(err);
    } else {
      if (responseData.messages[0]['status'] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
      }
    }
  })
}
}


const reset = () => {
  
  clearInterval(interv);
  setStatus(0);
  setTime({ ms: 0, s: 0, m: 0, h: 0 })
  resetSms()
  beginInterval()

};

const resume = () => start();

//*Add in API to store workout*//
function stopWorkout () {

  var questStop = window.confirm("Are you ready to end your workout?")
  if(questStop === true) {
  
    let text = 'This is to notify you that *User Name* has ended their workout. Their final location is *Location* .'

  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      
      console.log(err);
    } else {
      if (responseData.messages[0]['status'] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
      }
    }
  }) 
}
//API CALL SAVE WORKOUT DETAILS

  // API.saveSummary({
  //   totalTime: time
  //   activities: activities._id
  // })
  // .then(() =>  window.location.href =  '/dashboard' )
  // .catch(err => console.log(err));

}


return (
  <div className="main-section">
    <div className="clock-holder">
      <div className="stopwatch">
        <TimerDisplay time={time} />
        <TimerBtn status={status} resume={resume} reset={reset} pause={pause} start={start} />
      </div>
      <IconLabelButtons stop={stopWorkout} update={sendUpdate}/>
    </div>
    <Geolocate 
    userAddress={userAddress}
    latitude={latitude}
    longitude={longitude}
    />
  </div>
);

}


export default Timer;

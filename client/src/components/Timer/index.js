import React, { useState } from "react";
import TimerDisplay from "../TimerDisplay"
import TimerBtn from "../TimerBtn"
import IconLabelButtons from "../Buttons"
import "./timer.css"

//Geolocate function to address
// import getLocation from "../Geolocation"

//Vonage requirements 
const VONAGE_SECRET = process.env.REACT_APP_VONAGE_SECRET
const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "044d053d",
  apiSecret: "WfSDx917aV4z19Lx"
})

let from = '14696913589'
let to = '*Contact Number*'



function sendUpdate () {
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



return (
  <div className="main-section">
    <div className="clock-holder">
      <div className="stopwatch">
        <TimerDisplay time={time} />
        <TimerBtn status={status} resume={resume} reset={reset} pause={pause} start={start} />
      </div>
      <IconLabelButtons />
    </div>
  </div>
);

}


export default Timer;

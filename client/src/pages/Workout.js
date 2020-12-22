import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Row, Col, Container } from "../components/Grid";
import TimerBtn from "../components/TimerBtn";
import Timer from "../components/Timer";
import WorkoutDetails from "../components/WorkoutDetails"
import API from "../utils/API"


function Workout() {

    const [activities, setActivities] = useState([""]);
    const [contact, getContact] = useState([""]);
    const currentActivity = activities[0]
    let contactId = currentActivity.contacts
    
    
    useEffect(() => {
    
        API.getActivities()
          .then(res => 
            setActivities(res.data)
          ).catch((err) => console.log(err))    
    }, []);
    
    useEffect(() => {
          // Do nothing when contactId is not defined
          if(!contactId) return;
          API.getContact(contactId)
          .then(res => 
            getContact(res.data) // I also modified this line. It was updating the activities in your snippet
          ).catch((err) => console.log(err))
    
    }, [contactId]); // This effect will be run every time the contactId changes
    
    
    console.log(currentActivity)
    console.log(contactId)
    console.log(contact)
    // function findContact(contact) {
    //     for (var i = 0; i < contact.length; i++) {
    //         if (contact[i]._id === contactId) {
    //             let newContact = contact[i]
    //             return console.log(newContact)
    //         }
    //         else continue 
        
    //     }
    // }
    
        // let interval = activities.interval

        // if (interval === "00:05:00") {
        //    let setInterval = 300000
        // } if (interval === "00:10:00") {
        //     let setInterval = 600000
        // } if (interval === "00:20:00") {
        //     let setInterval = 3600000
        // }if (interval === "00:30:00") {
        //     let setInterval = 1800000
        // }if (interval === "01:00:00") {
        //     let setInterval = 3600000
        // } 

        // console.log(convertedInterval)

    return (
        <div>
            <Container>
                <Row>
                    <Col size="lg-3">

                    </Col>
                    <Col size="lg-6">
                        <Jumbotron>
                            <WorkoutDetails
                                key={currentActivity._id}
                                title={currentActivity.title}
                                interval={currentActivity.interval}
                                firstName={contact.firstName}
                                lastName={contact.lastName}
                                phoneNumber={contact.phoneNumber}

                            />
                            <hr />
                            <Timer />
                            <hr />
                            <TimerBtn />
                          
                        </Jumbotron>

                    </Col>
                    <Col size="lg-6">

                    </Col>
                </Row>

            </Container>
        </div>
    )

}

export default Workout
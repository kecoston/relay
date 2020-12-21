import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Row, Col, Container } from "../components/Grid";
import TimerBtn from "../components/TimerBtn";
import Timer from "../components/Timer";
import WorkoutDetails from "../components/WorkoutDetails"
import API from "../utils/API"


function Workout() {

    const [activities, setActivities] = useState([""]);
    const [contact, setContact] = useState();
    const currentActivity = activities[0]
    const contactId = currentActivity.contacts

    useEffect(() => {

        API.getActivities()
          .then((res) => {
            setActivities(res.data);
            
            API.getContact(activities)
              .then((res) => setContact(res.data))
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
          
      }, []);
  
    console.log(currentActivity)
    console.log(contactId)
    console.log(contact)


    //     let interval = activities.interval

    //     if (interval === "00:05:00") {
    //         setInterval === 300000
    //     } if (interval === "00:10:00") {
    //         setInterval === 600000
    //     } if (interval === "00:20:00") {
    //         setInterval === 3600000
    //     }if (interval === "00:30:00") {
    //         setInterval === 1800000
    //     }if (interval === "01:00:00") {
    //         setInterval === 3600000
    //     } 

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
                            // firstName={contact.firstName}
                            // lastName={contact.lastName}
                            // phoneNumber={contact.phoneNumber}

                            />
                            <hr />
                            <Timer />
                            <hr />
                            <TimerBtn />
                            <hr /> 
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
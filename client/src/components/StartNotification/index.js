import React from 'react'
import 'react-notifications-component/dist/theme.css'
import {store} from 'react-notifications-component'
import 'animate.css'

//Below needs to be imported on page that StartNotification is imported to
// import ReactNotification from 'react-notifications-component'


function StartNotification () {

    //default example 
    function handleOnClickDefault() {
        store.addNotification({
            title: "New Workout Started",
            message: "You have started your workout. Messages will be sent every 10 mins",
            // success, danger, info, default, warning
            type: "default",
            // top-left, top-right, top-center, center, bottom-left, bottom-right, bottom-center
            container:"top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 2000,
                showIcon: true
            },
            //insert width: here
        })
    }

    function handleOnClick () {
        store.addNotification({
            content: CheckIn, 
            // success, danger, info, default, warning
            type: "success",
            // top-left, top-right, top-center, center, bottom-left, bottom-right, bottom-center
            container:"top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 2000,
                showIcon: true
            },
        })
    }

    

    return(
        <div>
            <button onClick={handleOnClickDefault}>
                Start
            </button>

            <button onClick={handleOnClick}>
                Custom
            </button>

        </div>
    )

}

// Personalise the message
function CheckIn () {
    return (
        <div className="bg-primary text-white">
            <p>A Check-In Message Sent</p>
            <p> Your current location has been sent to Insert Contact Name</p>
        </div>

    )
}


export default StartNotification
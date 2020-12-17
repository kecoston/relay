import React from "react"

// Code to activate sending Notification
import { send } from "../../utils/Push"


function handleClick () {
    send("Push Notifications", "Push notification successfully sent to the browser! Check it out!")
}
function PushButton() {

    return (
        <button onClick={handleClick}>
            TESTING
        </button>
    )

}


export default PushButton
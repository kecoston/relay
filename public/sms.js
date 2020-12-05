
const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "044d053d",
  apiSecret: "WfSDx917aV4z19Lx"
})

const from = '14696913589'
const to = '18327731981'
const text = 'A text message sent using the Vonage SMS API'

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {n
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "ACeaa7dfb09f8febf4303261580ac82b0e";
const authToken = "be372bd005acf21474109a7a5c6a3e86";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12314403626',
     to: '+18327731981'
   })
  .then(message => console.log(message.sid));
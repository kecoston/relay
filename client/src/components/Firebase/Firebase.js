import firebase from 'firebase/app'

//The core Firebase JS SDK is always required and must be listed first
//src="https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js">

// TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries 


function FireComponenet() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAN1bfvvI_nLwmea5FwNW8kD0xQhO1BZZA",
    authDomain: "phrasal-ability-298302.firebaseapp.com",
    projectId: "phrasal-ability-298302",
    storageBucket: "phrasal-ability-298302.appspot.com",
    messagingSenderId: "1046004730827",
    appId: "1:1046004730827:web:bc8850501da9a22846844e"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

}

export default FireComponenet 
import React from 'react'
import './App.css';
import Jumbotron from './components/Jumbotron';
import Nav from './components/Nav';
import Geolocate from "./components/Geolocation/Geolocation"

console.log(process.env.REACT_APP_GOOGLE_API)
function App() {
  return (
    <div>
        <Nav />
        <Jumbotron />
        <Geolocate />
    </div>
  );
}

export default App;

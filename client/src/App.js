import React from 'react'
import './App.css';
import Jumbotron from './components/Jumbotron';
import Nav from './components/Nav';
import Geolocate from "./components/Geolocation/Geolocation"

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

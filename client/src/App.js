import React from 'react'
import './App.css';
import Signup from './components/Signup/Signup'
import Geoloc from './components/Geolocation/Geolocation'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Signup />
      <Geoloc />
      
    </div>
  );
}

export default App;

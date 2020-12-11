import React from 'react'
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Jumbotron from './components/Jumbotron';
import Nav from './components/Nav';
import Signup from './components/Signup/Signup'

function App() {
  return (
    <div>
        <Nav />
        <Jumbotron />
        <Signup />
    </div>
  );
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./components/Signup/Signup"
import Dashboard from "./pages/Dashboard";
import Workout from "./pages/Workout";
import FireComponenet from './components/Firebase/Firebase'

class App extends Component {

  componentDidMount () {
    const message = FireComponenet.messaging();
    console.log(message)

    message.requestPermission()
    .then(() => {
      return message.getToken();
    }).then((data) => {
      console.log('token', data)
    })
  }

  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/user" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/workout" component={Workout} />
          </div>
        </Router>
      
    );
  }

}
export default App;
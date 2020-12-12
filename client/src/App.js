import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Signup from "./components/Signup/Signup"
import Dashboard from "./pages/Dashboard";
import Workout from "./pages/Workout";

class App extends Component {
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
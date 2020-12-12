import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./components/Signup/Signup"

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/user" component={Signup} />
          </div>
        </Router>
    );
  }
}
export default App;
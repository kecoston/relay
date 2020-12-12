import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      
   
        <a className="navbar-brand" href="/home">Relay</a>
        
        <a href="/" style={{color: "grey"}}>Log Out</a>
      </div>
    </nav>
  );
}

export default Nav;
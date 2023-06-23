import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  

 


  return (
    <>
  
 <nav className="navbar navbar-expand-lg w-75 ms-4" style={props.theme}>
  {/* <div className="container-fluid" style={props.theme}> */}
    <a className="navbar-brand" href="#" style={props.theme}>Navbar</a>
   
    {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={props.theme}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={props.theme}>About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={props.theme}>Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" style={props.theme}>Disabled</a>
        </li>
      </ul>

</nav>

    </>
  );
}

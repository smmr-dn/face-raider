import React, { useState } from "react";
import "./HomePage.css";
import logo from "../../assets/logo-icon.png";
import { Link } from "react-router-dom";
import axios from "axios";

const NavBar = () => {

  const userEmail = localStorage.getItem("email");
  const query = {"email": userEmail};

  const userData = () => {
    axios.get("http://localhost:5000/getUser", userEmail);
  }
  
  const logOut = () => {
    axios.post("http://localhost:5000/logout").then((response) =>{
      localStorage.removeItem("email");
      window.location.reload(false);
    });
  }
  
  return (
    <div className="navbar">
      {/* <Link to="/"> */}
      <Link to="/">
        <div className="app-logo">
          <img className="logo-nav" src={logo} />
          <p className="app-name-nav">Face Raider</p>
        </div>
      </Link>
      {/* </Link> */}
      <ul className="auth">
        <li>
          {!userEmail && <Link to="/signup"> Register</Link>}
        </li>
        <li>
          {!userEmail && <Link to="/login"> Login</Link>}
        </li>
        <li>
          {userEmail && <Link to="/account">Account</Link>}
        </li>
        <li>
          {userEmail && <button className="auth" onClick={logOut}>Logout</button>}
        </li>
      </ul>
    </div>
  );
};
export default NavBar;

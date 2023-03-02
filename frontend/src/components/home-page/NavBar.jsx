import React, { useState } from "react";
import "./HomePage.css";
import logo from "../../assets/logo-icon.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
  const userEmail = localStorage.getItem("email");
  const query = { email: userEmail };

  const userData = () => {
    axios.get("http://localhost:5000/getUser", userEmail);
  };

  const logOut = () => {
    axios.post("http://localhost:5000/logout").then((response) => {
      localStorage.removeItem("email");
      window.location.href="/home";
    });
  };

  const location = useLocation().pathname;

  return (
    <div className="navbar">
      <Link
        style={{
          visibility: location === "/" ? "hidden" : "visible",
        }}
        className="auth-item"
        to="/"
      >
        <div className="app-logo">
          <img className="logo-nav" src={logo} />
          <p className="app-name-nav">Face Raider</p>
        </div>
      </Link>
      <ul className="auth">
        <li>
          {!userEmail && (
            <Link className="auth-item" to="/signup">
              {" "}
              Register
            </Link>
          )}
        </li>
        <li>
          {!userEmail && (
            <Link className="auth-item" to="/login">
              {" "}
              Login
            </Link>
          )}
        </li>
        <li>
          {userEmail && (
            <Link className="auth-item" to="/account">
              Account
            </Link>
          )}
        </li>
        <li>
          {userEmail && (
            <button className="auth" onClick={logOut}>
              Logout
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};
export default NavBar;

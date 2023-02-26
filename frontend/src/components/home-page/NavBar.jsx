import React from "react";
import "./HomePage.css";
import logo from "../../assets/logo-icon.png";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="app-logo">
        <img className="logo-nav" src={logo} />
        <p className="app-name-nav">Face Raider</p>
      </div>
      <ul className="auth">
        <li>Register</li>
        <li>Login</li>
      </ul>
    </div>
  );
};
export default NavBar;

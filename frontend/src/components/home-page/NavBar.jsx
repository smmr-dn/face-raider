import React from "react";
import "./HomePage.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <p className="app-logo">Face Raider</p>
      <ul className="auth">
        <li>Register</li>
        <li>Login</li>
      </ul>
    </div>
  );
};
export default NavBar;

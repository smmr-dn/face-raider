import React from "react";
import "./HomePage.css";
import logo from "../../assets/logo-icon.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="auth-item" to="/">
        <div className="app-logo">
          <img className="logo-nav" src={logo} />
          <p className="app-name-nav">Face Raider</p>
        </div>
      </Link>
      <ul className="auth">
        <li>
          <Link className="auth-item" to="/signup">
            {" "}
            Register
          </Link>
        </li>
        <li className="auth-item">
          <Link className="auth-item" to="/login">
            {" "}
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;

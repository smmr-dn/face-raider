import React from "react";
import "./HomePage.css";
import logo from "../../assets/logo-icon.png";
import { Link } from "react-router-dom";
const NavBar = () => {
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
          <Link to="/signup"> Register</Link>
        </li>
        <li>
          <Link to="/login"> Login</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;

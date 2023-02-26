import React from "react";
import NavBar from "./NavBar";
import "./HomePage.css";
import AttendanceHome from "./AttendanceHome";
import ScanOptions from "./ScanOptions";

const HomePage = () => {
  return (
    <div className="home-main">
      <div className="home-content">
        <AttendanceHome />
        <ScanOptions />
      </div>
    </div>
  );
};
export default HomePage;

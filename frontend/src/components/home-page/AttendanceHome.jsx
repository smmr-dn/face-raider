import React from "react";
import "./HomePage.css";
import logo from "../../assets/logo-icon.png";
import { Routes, Route, useNavigate } from "react-router-dom";

let courses = [
  { name: "CS4352 - Operating Systems", value: "CS4352" },
  { name: "CS4393 - Computer Networks", value: "CS4392" },
  { name: "CS4354 - Concepts of Database Systems", value: "CS4354" },
];

const AttendanceHome = () => {

  const [r_number, setRNumber] = React.useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    localStorage.setItem("r_number", r_number);
    window.location.href = "/scan-options";
  }

  return (
    <div className="home-container">
      <div className="face-raider app-logo">
        <img src={logo} />
        <p className="app-name-main">Face Raider</p>
      </div>
      <form id="r-num form" onSubmit={handleSubmit}>
      <div className="scan-options">
        <label for="R-number">Enter Your R Number</label>
        <div className="R-number-container">
          <p className="R">R</p>
          <input
            id="R-number"
            type="text"
            placeholder="--------"
            required
            value={r_number} onChange={(e) => setRNumber(e.target.value)}
          ></input>
        </div>
      </div>
      </form>
      <div className="course-list">
        <label for="select-course">Please select your course</label>
        <select id="select-course" required>
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option value={course.value}>{course.name}</option>
          ))}
        </select>
      </div>

      <button className="btn btn-home-container" form="r-num form" type="submit">
        Check Attendance
      </button>
    </div>
  );
};
export default AttendanceHome;

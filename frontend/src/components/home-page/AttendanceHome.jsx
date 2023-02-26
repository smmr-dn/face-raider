import React from "react";
import "./HomePage.css";
import logo from "../../assets/logo-icon.png";

let courses = [
  { name: "CS4352 - Operating Systems", value: "CS4352" },
  { name: "CS4393 - Computer Networks", value: "CS4392" },
  { name: "CS4354 - Concepts of Database Systems", value: "CS4354" },
];
const AttendanceHome = () => {
  return (
    <div className="home-container">
      <div className="face-raider app-logo">
        <img src={logo} />
        <p className="app-name-main">Face Raider</p>
      </div>
      <div className="course-list">
        <label for="select-course">Please select your course</label>
        <select id="select-course" required>
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option value={course.value}>{course.name}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-home-container">Check Attendance</button>
    </div>
  );
};
export default AttendanceHome;

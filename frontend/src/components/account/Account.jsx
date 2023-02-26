import NavBar from "../home-page/NavBar";
import "./Account.css";
import React from "react";
import "../home-page/HomePage.css";

let courses = [
  {
    name: "CS4352 - Operating Systems",
    courseID: "CS4352",
    profName: "Prof. A",
    present_count: 6,
    absent_count: 1,
  },
  {
    name: "CS4393 - Computer Networks",
    courseID: "CS4392",
    profName: "Prof. B",
    present_count: 6,
    absent_count: 0,
  },
  {
    name: "CS4354 - Concepts of Database Systems",
    courseID: "CS4354",
    profName: "Prof. C",
    present_count: 7,
    absent_count: 0,
  },
];

let availableCourses = [
  {
    name: "CS4352 - Operating Systems",
    courseID: "CS4352",
    profName: "Prof. A",
  },
  {
    name: "CS4393 - Computer Networks",
    courseID: "CS4392",
    profName: "Prof. B",
  },
  {
    name: "CS4354 - Concepts of Database Systems",
    courseID: "CS4354",
    profName: "Prof. C",
  },
  {
    name: "CS4352 - Operating Systems",
    courseID: "CS4352",
    profName: "Prof. C",
  },
  {
    name: "CS4393 - Computer Networks",
    courseID: "CS4392",
    profName: "Prof. D",
  },
  {
    name: "CS4354 - Concepts of Database Systems",
    courseID: "CS4354",
    profName: "Prof. C",
  },
  {
    name: "CS4352 - Operating Systems",
    courseID: "CS4352",
    profName: "Prof. E",
  },
  {
    name: "CS4393 - Computer Networks",
    courseID: "CS4392",
    profName: "Prof. F",
  },
  {
    name: "CS4354 - Concepts of Database Systems",
    courseID: "CS4354",
    profName: "Prof. C",
  },
  {
    name: "CS4352 - Operating Systems",
    courseID: "CS4352",
    profName: "Prof. G",
  },
  {
    name: "CS4393 - Computer Networks",
    courseID: "CS4392",
    profName: "Prof. H",
  },
  {
    name: "CS4354 - Concepts of Database Systems",
    courseID: "CS4354",
    profName: "Prof. C",
  },
  {
    name: "CS4352 - Operating Systems",
    courseID: "CS4352",
    profName: "Prof. I",
  },
  {
    name: "CS4393 - Computer Networks",
    courseID: "CS4392",
    profName: "Prof. J",
  },
  {
    name: "CS4354 - Concepts of Database Systems",
    courseID: "CS4354",
    profName: "Prof. H",
  },
];

const Account = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  function handleTabClick(index) {
    setActiveTab(index);
  }

  return (
    <div className="user-account-page">
      <div className="vertical-tabs">
        <ul className="tab-headers">
          <li
            className={`tab-header ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(0)}
          >
            Your Courses
          </li>
          <li
            className={`tab-header ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Resources
          </li>
          <li
            className={`tab-header ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Grades
          </li>
          <li
            className={`tab-header ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            Find Courses
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div
          className={`tab-panel tab-content--your-courses ${
            activeTab === 0 ? "active" : ""
          }`}
        >
          {courses.map((course) => (
            <div className="course">
              <p className="course-name">{course.name}</p>
              <p className="course-prof your-course-prof">{course.profName} </p>
              <p className="course-attendance">
                Attendance: {course.present_count}/
                {course.present_count + course.absent_count}
              </p>
            </div>
          ))}
        </div>
        <div className={`tab-panel ${activeTab === 1 ? "active" : ""}`}>
          Content for Tab 2
        </div>
        <div className={`tab-panel ${activeTab === 2 ? "active" : ""}`}>
          Content for Tab 3
        </div>
        <div
          className={`tab-panel tab-content--find-courses ${
            activeTab === 3 ? "active" : ""
          }`}
        >
          {availableCourses.map((availableCourses) => (
            <div className="course availCourseItem">
              <div className="">
                <p className="course-name">{availableCourses.name}</p>
                <p className="course-prof">{availableCourses.profName}</p>
              </div>
              <button className="btn-add">Add</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;

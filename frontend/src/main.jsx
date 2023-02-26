import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AttendanceHome from "./components/home-page/AttendanceHome";
import NavBar from "./components/home-page/NavBar";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<AttendanceHome />} />
        <Route path="/" element={<App />} />
        <Route path="signup" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

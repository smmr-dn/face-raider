import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AttendanceHome from "./components/home-page/AttendanceHome";
import NavBar from "./components/home-page/NavBar";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import ScanOptions from "./components/home-page/ScanOptions";
import Account from "./components/account/Account";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <NavBar />

      <Routes>
        <Route path="/home" element={<AttendanceHome />} />
        <Route path="/" element={<App />} />
        <Route path="signup" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="scan-options" element={<ScanOptions />}></Route>
        <Route path="account" element={<Account/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

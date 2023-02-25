import React from "react";
import "./HomePage.css";

const ScanOptions = () => {
  return (
    <div className="home-container">
      <label for="R-number">Enter Your R Number</label>
      <input id="R-number" type="text" placeholder="R--------" required></input>
    </div>
  );
};
export default ScanOptions;

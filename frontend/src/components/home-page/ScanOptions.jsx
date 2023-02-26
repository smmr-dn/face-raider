import React from "react";
import "./HomePage.css";

const ScanOptions = () => {
  return (
    <div className="home-container">
      <div className="scan-options">
        <label for="R-number">Enter Your R Number</label>
        <div className="R-number-container no-outline">
          <p className="R">R</p>
          <input
            id="R-number"
            type="text"
            placeholder="--------"
            required
          ></input>
        </div>
      </div>
      <div className="scan-option-btn-container">
        <button className="btn">Scan Your Face</button>
        <button className="btn">Scan Barcode</button>
      </div>
    </div>
  );
};
export default ScanOptions;

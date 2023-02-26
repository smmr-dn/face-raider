import React from "react";
import "./HomePage.css";

const ScanOptions = () => {
  return (
    <div className="home-container">
      <div className="scan-option-btn-container">
        <button className=" btn btn-full ">Scan Your Face</button>
        <button className="btn btn-outline">Scan Barcode</button>
      </div>
    </div>
  );
};
export default ScanOptions;

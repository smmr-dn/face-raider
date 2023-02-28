import React from "react";
import "./HomePage.css";
import Webcam from "react-webcam";
import axios from 'axios';
import { useState } from "react";

const ScanOptions = () => {
  const [showWebcam, setShowWebcam] = React.useState(false);
  const [showpopup, setShowpopup] = React.useState(false);
  const [image2, setPath] = React.useState("");
  const r_number = localStorage.getItem("r_number");
  const [picture_path, setPicPath] = React.useState(null);

  const webcamRef = React.useRef(null);

  function handleToggleWebcam() {
      setShowWebcam(!showWebcam);
  }

  function popup(){
    setShowpopup(!showpopup)
  }

  const capture = React.useCallback( async () => {
    const imageSrc = await webcamRef.current.getScreenshot();
    setPath(imageSrc);
    console.log(image2);

    if (imageSrc) {
      alert("Image captured!");
    } else {
      alert("Capture failed. Please try again!");
    }

    let data = {r_number, image2};

    axios.get("http://localhost:5000/getImage", data).then((response) => {
      setPicPath(response);
    })

    axios.post("http://localhost:5000/checkIn", data).then((response) => {
      console.log(response);
    })

  }, [webcamRef]);

  
  return (
    <div className="home-container">
      <div className="scan-option-btn-container">
        {showWebcam && (
          <Webcam
            audio={false}
            height={450}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={450}
          />
        )}
        {showpopup && (
          <div className="popup">
            <h2>
              Fail to capture your picture. <br /> Please try again!
            </h2>
            <div className="btn-container">
              <button className="btn btn-full" onClick={popup}>
                Try again
              </button>

              <button className="btn btn-outline" onClick={popup}>
                Close
              </button>
            </div>
          </div>
        )}
        <div className="btn-container">
          <button className=" btn btn-full " onClick={handleToggleWebcam}>
            {showWebcam ? "Hide Camera" : "Scan Your Face"}
          </button>

          {showWebcam && (
            <button className="btn btn-full" onClick={capture}>
              Capture
            </button>
          )}
          <button className="btn btn-outline" onClick={popup}>
            Scan Barcode
          </button>
        </div>
      </div>
    </div>
  );
};
export default ScanOptions;

import React from "react";
import "./HomePage.css";
import Webcam from "react-webcam";
import axios from 'axios';
import { useState } from "react";

const ScanOptions = () => {
  const [showWebcam, setShowWebcam] = React.useState(false);
  const [showpopup, setShowpopup] = React.useState(false);

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
    });

    const response = await fetch("https://faceapi.mxface.ai/api/v3/face/verify", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "subscriptionkey": "KUMABfeqGMtp5n89H3-F1yr14IYJZ1350",
      },
      body: JSON.stringify({
          encoded_image1: picture_path,
          encoded_image2: image2.slice(23),
      }),
  });

    // axios.post("http://localhost:5000/checkIn", data).then((response) => {
        
        if(response.matchedFace[0].matchResult == 1){
          console.log("match!");
          //window.location.href = '/account';
        } else {
          console.log("not match!");
        }

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

import React from "react";
import "./HomePage.css";
import Webcam from "react-webcam";
import { useState } from "react";

const ScanOptions = () => {
  const [showWebcam, setShowWebcam] = React.useState(false);
  const webcamRef = React.useRef(null);
  const [showpopup, setPopup] = React.useState(false);

  const popup = () => {
    setPopup(!showpopup);
  };

  function handleToggleWebcam() {
    setShowWebcam(!showWebcam);
  }

  const capture = React.useCallback(async () => {
    const imageSrc = await webcamRef.current.getScreenshot();
    setPath(imageSrc);

    if (imageSrc) {
      alert("Image captured!");
    } else {
      alert("Capture failed. Please try again!");
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

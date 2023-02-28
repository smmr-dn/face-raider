import React from "react";
import "./HomePage.css";
import Webcam from "react-webcam";
import axios from 'axios';

const ScanOptions = () => {
  const [showWebcam, setShowWebcam] = React.useState(false);
  const [showpopup, setShowpopup] = React.useState(false);
  const [image, setPath] = React.useState("");

  const webcamRef = React.useRef(null);

  function handleToggleWebcam() {
      setShowWebcam(!showWebcam);
  }

  function popup(){
    setShowpopup(!showpopup)
  }

  const verifyFace = async () => {
    
    const imageSrc = await webcamRef.current.getScreenshot();
    
    const r_number = localStorage.getItem("r_number");
    const data = {r_number, imageSrc};

    const response = await axios.post("http://localhost:5000/checkIn", data)
                                  .then(response => response)
                                  .catch(error => error.response);

  };

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
            <button className="btn btn-full" onClick={verifyFace}>
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

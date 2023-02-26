import React from "react";
import "./HomePage.css";
import Webcam from "react-webcam";

const ScanOptions = () => {
  const [showWebcam, setShowWebcam] = React.useState(false);
    const webcamRef = React.useRef(null);

    function handleToggleWebcam() {
        setShowWebcam(!showWebcam);
    }

  const capture = React.useCallback( async () => {
    const imageSrc = await webcamRef.current.getScreenshot();
    setPath(imageSrc);

    if(imageSrc){
        alert("Image captured!");
    } else {
      alert("Capture failed. Please try again!")
    }
  }, [webcamRef]);

  return (
    <div className="home-container">
      <div className="scan-option-btn-container">
        <button className=" btn btn-full " onClick={handleToggleWebcam}>{showWebcam ? "Hide Camera" : "Scan Your Face"}</button>
        {showWebcam && <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={700}
          />}
        {showWebcam && <button className="btn btn-full" onClick={capture}>Capture</button>}
        <button className="btn btn-outline">Scan Barcode</button>
      </div>
    </div>
  );
};
export default ScanOptions;

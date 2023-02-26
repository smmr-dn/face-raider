import React from "react";
import '../login/Login.css';
import Webcam from 'react-webcam';
import logo from "../../assets/logo-icon.png";

const Signup = () => {
    const [showWebcam, setShowWebcam] = React.useState(false);
    const webcamRef = React.useRef(null);

    function handleToggleWebcam() {
        setShowWebcam(!showWebcam);
    }

    const capture = React.useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot();
          console.log(imageSrc);
        },
        [webcamRef]
    );

    return (
        <div className="formBox">
            <div className="container">
                
                <img src={logo}/>
                <div className="form-group">
                    <h2>SIGN UP</h2>
                    <form className="form">
                        <div className="form-inputs">
                            <input className="text-input" type="text" placeholder="First name"></input>
                        </div>
                        <div className="form-inputs">
                            <input className="text-input" type="text" placeholder="Last name"></input>
                        </div>
                        <div className="form-inputs">
                            <input className="text-input" type="text" placeholder="R number"></input>
                        </div>
                        <div className="form-inputs">
                            <input className="text-input" type="text" placeholder="TTU Email"></input>
                        </div>
                        <div className="form-inputs">
                            <input className="text-input" type="password" placeholder="New Password"></input>
                        </div>
                    </form>
                </div>
                <div className="webcam">
                    <button className="button-81" onClick={handleToggleWebcam}>
                    {showWebcam ? 'Hide Camera' : 'Take a Picture'}</button>
                    {showWebcam &&
                        <Webcam
                            audio={false}
                            height={720}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={700}
                        />
                    } 
                    {showWebcam && <button className="button-81" onClick={capture}>Capture photo</button>}
                    <button className="button-81" type="button" >SIGNUP</button>
                </div>
            </div>
            
        </div>
    )
    
}

export default Signup
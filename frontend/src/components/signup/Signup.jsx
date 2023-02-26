import React, { useState } from "react";
import "../login/Login.css";
import Webcam from "react-webcam";
import logo from "../../assets/logo-icon.png";
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';

const Signup = () => {

    const [first_name, setfName] = useState("");
    const [last_name, setlName] = useState("");
    const [r_number, setRnumber] = useState(0);
    const [email, setEmail] = useState("");
    const [image, setPath] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const data = {first_name, last_name, r_number, email, image, password};
        console.log(data);
        try {
            await axios.post("http://localhost:5000/register", data, {
                headers: {
                    "Content-Type": "application/json",
                }
            }).then((data) => {
                if(data){
                    window.location.href = '/login';
                }
                console.log(data);
            });
        } catch (error) {
            console.log(error);
        }
    }

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
    }
  }, [webcamRef]);

  return (
    
      <div className="form-container">
        
          <h2>SIGN UP</h2>
          <form className="form" id="signup-form" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <input
                id="login-signup-input"
                className="text-input"
                type="text"
                placeholder="First name"
                value={first_name} onChange={(e) => setfName(e.target.value)}
              ></input>
            </div>
            <div className="form-inputs">
              <input
                id="login-signup-input"
                className="text-input"
                type="text"
                placeholder="Last name"
                value={last_name} onChange={(e) => setlName(e.target.value)}
              ></input>
            </div>
            <div className="form-inputs">
              <input
                id="login-signup-input"
                className="text-input"
                type="number"
                placeholder="R number"
                value={r_number} onChange={(e) => setRnumber(e.target.value)}
              ></input>
            </div>
            <div className="form-inputs">
              <input
                id="login-signup-input"
                className="text-input"
                type="text"
                placeholder="TTU Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-inputs">
              <input
                id="login-signup-input"
                className="text-input"
                type="password"
                placeholder="New Password"
                value={password} onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </form>
          {showWebcam && (
            <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={700}
            />
          )}

        <div className="buttons">
          <button className="button-81" onClick={handleToggleWebcam}>
            {showWebcam ? "Hide Camera" : "Take a Picture"}
          </button>
          {showWebcam && (
            <button className="button-81" onClick={capture}>
              Capture photo
            </button>
          )}
          <button className="button-81" id="submit-btn" type="submit" form="signup-form">
            SIGNUP
          </button>
        </div>
      </div>
  );
};

export default Signup;

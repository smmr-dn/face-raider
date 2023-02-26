import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo-icon.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async(e) => {
    e.preventDefault();

    const data = {email, password};
    localStorage.setItem("email", email);
    
    try {
        await axios.post("http://localhost:5000/login", data, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
          
            if(response){
                window.location.href = '/account';
            }
        });
    } catch (error) {
        console.log(error);
    }
  }

  return (
    
    <div className="form-container">
      <img src={logo} />
      <h1>Face Raider</h1>
      <h2>LOGIN</h2>
      <form className="form" id="login-form" onSubmit={handleSubmit}>
    
        <div className="form-inputs">
          <input
            id="login-signup-input"
            className="text-input"
            type="email"
            placeholder="TTU Email"
            value={email} onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="form-inputs">
          <input
            id="login-signup-input"
            className="text-input"
            type="password"
            placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
      </form>
      <div className="button">
        <button className="button-81" form="login-form" id="submit-btn" type="submit">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;

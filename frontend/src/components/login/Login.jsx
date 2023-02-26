import React from "react";
import './Login.css';
import logo from "../../assets/logo-icon.png";

const Login = () => {
    return (
    
            <div className="form-container">
                <img src={logo} />
                <h1>Face Raider</h1>
                <h2>LOGIN</h2>
                    <form className="form">
                        <div className="form-inputs">
                            <input className="text-input" type="text" placeholder="R"></input>
                        </div>
                        <div className="form-inputs">
                            <input className="text-input" type="email" placeholder="TTU Email"></input>
                        </div>
                        
                        <div className="form-inputs">
                            <input className="text-input" type="password" placeholder="Password"></input>
                        </div>
                    </form>
                <div className="button">
                    <button className="button-81" id="submit-btn" type="submit">LOGIN</button>
                </div>
            
        </div>
    )
}

export default Login
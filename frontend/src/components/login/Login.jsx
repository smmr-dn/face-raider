import React from "react";
import './Login.css';

const Login = () => {
    return (
        <div className="loginBox">
            <img src="./assets/face-icon.png"/>
            <div className="container">
                <h1>Welcome to Face Raider</h1>
                
                <div className="form-group">
                    <h2>LOGIN</h2>
                    <form className="form">
                        <div className="form-inputs">
                            <input className="text-input" type="text" placeholder="R"></input>
                        </div>
                        
                        <div className="form-inputs">
                            <input className="text-input" type="password" placeholder="Password"></input>
                        </div>
                    </form>
                </div>
                <div className="button">
                    <button className="button-17" type="submit">LOGIN</button>
                </div>
            </div>
            
        </div>
    )
}

export default Login
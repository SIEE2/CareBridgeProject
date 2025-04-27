import React from "react";
import "./CaregiverSignIn.css";


const CaregiverSignIn = () => {
  return (
    <div className="container-caregiversignin">
      <img src="/images/companylogo.png" alt="CareBridge Logo" className="companylogo" />
      <div className="login-box">
        <h1>Welcome Back!</h1>
        <p className="enterdetails">Enter your details below</p>
        <input type="text" placeholder="Caregiver ID" className="input-field" />
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="sign-in-btn">Sign in</button>
        <a href="#" className="forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};


export default CaregiverSignIn;
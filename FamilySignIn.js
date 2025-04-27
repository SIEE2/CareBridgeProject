import React from "react";
import "./FamilySignIn.css";


const FamilySignIn = () => {
  return (
    <div className="container-familysignin">
    <a href="#" className="add-account"><u>Don't have an account?</u></a>
      <img src="/images/companylogo.png" alt="CareBridge Logo" className="companylogo" />
      <div className="login-box">
        <h1>Welcome!</h1>
        <p className="enterdetails">Enter your details below</p>
        <input type="text" placeholder="Email Address" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="sign-in-btn">Sign in</button>
        <a href="#" className="forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};


export default FamilySignIn;

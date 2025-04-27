import React from "react";
import "./FamilySignUp.css";


const FamilySignup = () => {
  return (
    <div className="familysignupcontainer">
    <a href="#" className="add-account-up"><u>Already have an account?</u></a>
      <img src="/images/companylogo.png" alt="CareBridge Logo" className="companylogo" />
      <div className="login-box">
        <h1>Get Started!</h1>
        <p className="enterdetails">Enter your details below</p>
        <input type="text" placeholder="Email Address" className="input-field" />
        <input type="text" placeholder="Password" className="input-field" />
        <input type="password" placeholder="Phone Number" className="input-field" />
        <button className="sign-in-btn">Sign up</button>
      </div>
    </div>
  );
};


export default FamilySignup;
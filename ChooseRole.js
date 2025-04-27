import React from 'react';
import './ChooseRole.css';

const ChooseRole = () => {
  return (
    <div className="choose-role-container">
      <img src="/images/companylogo.png" alt="CareBridge Logo" className="choose-role-logo" />
      <div className="choose-role-card">
        <h1 className="welcome-text">Welcome!</h1>
        <p className="choose-role-label">Login as:</p>
        <button className="choose-role-button">Family</button>
        <button className="choose-role-button">Caregiver</button>
      </div>
    </div>
  );
};

export default ChooseRole;

// src/FunctionButtons.js
import React from 'react';
import './FunctionButtons.css'; // Create a CSS file for styling

function FunctionButtons({ onBMIClick, onTrackerClick, onFitnessClick }) {
  return (
    <div className="button-container">
      <div className="button-box" onClick={onBMIClick}>
        <h2>BMI Calculator</h2>
      </div>
      <div className="button-box" onClick={onTrackerClick}>
        <h2>Tracker</h2>
      </div>
      <div className="button-box" onClick={onFitnessClick}>
        <h2>Fitness Suggestions</h2>
      </div>
    </div>
  );
}

export default FunctionButtons;

import React from 'react';
import './FunctionButtons.css'; // Create a CSS file for styling

function FunctionButtons({ onBMIClick, onTrackerClick, onFitnessClick, onRecipeClick }) {
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
      <div className="button-box" onClick={onRecipeClick}>
        <h2>Healthy Recipes</h2>
      </div>
    </div>
  );
}

export default FunctionButtons;

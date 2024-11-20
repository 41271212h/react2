import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Fitness App</h1>
      <p>Your go-to tool for tracking health and fitness goals!</p>
      
      <div className="links">
        <a href="/bmi-calculator" className="link-button">BMI Calculator</a>
        <a href="/tracker" className="link-button">Tracker</a>
        <a href="/fitness-suggestions" className="link-button">Fitness Suggestions</a>
      </div>

      <div className="creator-name">
        <p>Made by Patrick Tsai</p>
      </div>
    </div>
  );
};

export default Homepage;

// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Add a CSS file for styling

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to the Fitness App</h1>
      <p>Your go-to tool for tracking health and fitness goals!</p>
      <div className="links">
        <Link to="/bmi-calculator" className="link-button">BMI Calculator</Link>
        <Link to="/tracker" className="link-button">Calorie, Protein & Fat Tracker</Link>
        <Link to="/fitness-suggestions" className="link-button">Physical Fitness Suggestions</Link>
      </div>
      <div className="creator-name"> 
        <h5>Made by Patrick Tsai</h5>
      </div>
    </div>
  );
}

export default HomePage;

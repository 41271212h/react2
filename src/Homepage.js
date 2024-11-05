import React from 'react';
import './Homepage.css'; // Import the CSS for styling

const Homepage = () => {
  return (
    <div className="container">
      <h1>Welcome to Your Health and Fitness App</h1>
      <p>Explore our features to improve your well-being.</p>
      
      <div className="links">
        <a href="/bmi-calculator" className="link-button">BMI Calculator</a>
        <a href="/tracker" className="link-button">Tracker</a>
        <a href="/fitness-suggestions" className="link-button">Fitness Suggestions</a>
        <a href="/recipe" className="link-button">Recipes for Health</a>
        <a href="/weeklyplan" className="link-button">Weekly Workout Plan</a>
      </div>

      <div className="creator-name">
        <p>Created by Patrick Tsai, Maverick Soebroto and Nai-i Ou</p>
      </div>
    </div>
  );
};

export default Homepage;

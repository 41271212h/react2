import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import BMICalculator from './BMICalculator';
import Tracker from './Tracker';
import FitnessSuggestions from './FitnessSuggestions';
import Recipe from './Recipe';
import WeeklyPlan from './WeeklyPlan';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation bar */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/bmi-calculator">BMI Calculator</Link> | 
          <Link to="/tracker">Tracker</Link> | 
          <Link to="/fitness-suggestions">Fitness Suggestions</Link> | 
          <Link to="/recipe">Recipes for Health</Link> | 
          <Link to="/weeklyplan">Weekly Workout Plan</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/fitness-suggestions" element={<FitnessSuggestions />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/weeklyplan" element={<WeeklyPlan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

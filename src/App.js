import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import BMICalculator from './BMICalculator';
import Tracker from './Tracker';
import FitnessSuggestions from './FitnessSuggestions';
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
          <Link to="/fitness-suggestions">Fitness Suggestions</Link> 
        </nav>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/fitness-suggestions" element={<FitnessSuggestions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// src/FitnessSuggestions.js
import React, { useState } from 'react';
import './FitnessSuggestions.css'; // Assuming you have a CSS file for styling

const FitnessSuggestions = () => {
  const suggestions = {
    strength: [
      "Try incorporating squats into your routine for better leg strength.",
      "Push-ups can enhance upper body strength; aim for three sets of ten.",
      "Consider deadlifts to build overall strength and improve your posture."
    ],
    cardio: [
      "Running for at least 30 minutes three times a week can boost your heart health.",
      "Cycling is a fun way to improve your cardiovascular fitness.",
      "Try HIIT workouts for effective and efficient cardio sessions."
    ],
    flexibility: [
      "Incorporate yoga sessions into your week for increased flexibility.",
      "Dynamic stretching before workouts can help improve your range of motion.",
      "Consider Pilates for core strength and enhanced flexibility."
    ]
  };

  const [selectedActivity, setSelectedActivity] = useState('');
  const [randomSuggestion, setRandomSuggestion] = useState('');

  const generateSuggestion = () => {
    if (!selectedActivity) {
      alert("Please select a type of activity.");
      return;
    }
    // Randomly select a suggestion from the selected activity type
    const randomSuggestionIndex = Math.floor(Math.random() * suggestions[selectedActivity].length);
    const suggestion = suggestions[selectedActivity][randomSuggestionIndex];
    setRandomSuggestion(suggestion);
  };

  const clearSelection = () => {
    setRandomSuggestion('');
    setSelectedActivity('');
  };

  return (
    <div className="fitness-suggestions">
      <h1>Fitness Suggestions</h1>

      <div>
        <label htmlFor="activity-select">Choose a type of activity:</label>
        <select
          id="activity-select"
          value={selectedActivity}
          onChange={(e) => setSelectedActivity(e.target.value)}
        >
          <option value="">Select an activity</option>
          <option value="strength">Strength</option>
          <option value="cardio">Cardio</option>
          <option value="flexibility">Flexibility</option>
        </select>
      </div>

      <button onClick={generateSuggestion}>Generate Random Suggestion</button>

      {randomSuggestion && (
        <div className="suggestion-display">
          <p>{randomSuggestion}</p>

          <div className="button-container">
            <button type="button" onClick={clearSelection}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FitnessSuggestions;

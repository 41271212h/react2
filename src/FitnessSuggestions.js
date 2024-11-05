import React, { useState } from 'react';
import './FitnessSuggestions.css';

const fitnessSuggestions = {
  Arms: [
    { name: 'Bicep Curls', sets: 3, reps: 12 },
    { name: 'Tricep Dips', sets: 3, reps: 15 },
    { name: 'Push-ups', sets: 3, reps: 20 },
    { name: 'Dumbbell Shoulder Press', sets: 4, reps: 10 },
    { name: 'Chin-ups', sets: 3, reps: 8 },
    { name: 'Hammer Curls', sets: 3, reps: 12 },
    { name: 'Overhead Tricep Extension', sets: 3, reps: 12 },
    { name: 'Cable Tricep Pushdown', sets: 3, reps: 15 },
    { name: 'Concentration Curls', sets: 3, reps: 10 },
    { name: 'Close-Grip Bench Press', sets: 4, reps: 8 },
  ],
  Abs: [
    { name: 'Crunches', sets: 3, reps: 20 },
    { name: 'Plank', sets: 3, time: '1 min' },
    { name: 'Russian Twists', sets: 3, reps: 15 },
    { name: 'Leg Raises', sets: 3, reps: 15 },
    { name: 'Mountain Climbers', sets: 3, time: '1 min' },
    { name: 'Bicycle Crunches', sets: 3, reps: 20 },
    { name: 'Hanging Leg Raises', sets: 3, reps: 12 },
    { name: 'Side Plank', sets: 3, time: '45 sec each side' },
    { name: 'Toe Touches', sets: 3, reps: 20 },
    { name: 'Reverse Crunches', sets: 3, reps: 15 },
  ],
  Legs: [
    { name: 'Squats', sets: 4, reps: 12 },
    { name: 'Lunges', sets: 3, reps: 15 },
    { name: 'Deadlifts', sets: 4, reps: 10 },
    { name: 'Leg Press', sets: 3, reps: 12 },
    { name: 'Calf Raises', sets: 4, reps: 15 },
    { name: 'Leg Extensions', sets: 3, reps: 12 },
    { name: 'Leg Curls', sets: 3, reps: 12 },
    { name: 'Bulgarian Split Squats', sets: 3, reps: 10 },
    { name: 'Step-Ups', sets: 3, reps: 12 },
    { name: 'Goblet Squats', sets: 3, reps: 15 },
  ],
  Chest: [
    { name: 'Bench Press', sets: 4, reps: 8 },
    { name: 'Chest Fly', sets: 3, reps: 12 },
    { name: 'Push-ups', sets: 3, reps: 20 },
    { name: 'Incline Dumbbell Press', sets: 4, reps: 10 },
    { name: 'Cable Crossovers', sets: 3, reps: 15 },
    { name: 'Decline Bench Press', sets: 4, reps: 8 },
    { name: 'Chest Dips', sets: 3, reps: 12 },
    { name: 'Pec Deck Machine', sets: 3, reps: 15 },
    { name: 'Incline Push-ups', sets: 3, reps: 20 },
    { name: 'Dumbbell Pullover', sets: 3, reps: 12 },
  ],
  Back: [
    { name: 'Pull-ups', sets: 3, reps: 10 },
    { name: 'Bent Over Rows', sets: 4, reps: 10 },
    { name: 'Deadlifts', sets: 4, reps: 8 },
    { name: 'Lat Pulldowns', sets: 3, reps: 12 },
    { name: 'Seated Rows', sets: 3, reps: 12 },
    { name: 'Single-Arm Dumbbell Row', sets: 3, reps: 12 },
    { name: 'Face Pulls', sets: 3, reps: 15 },
    { name: 'T-Bar Rows', sets: 3, reps: 10 },
    { name: 'Good Mornings', sets: 3, reps: 12 },
    { name: 'Superman Exercise', sets: 3, time: '30 sec' },
  ],
  Cardio: [
    { name: 'Running', time: '30 mins' },
    { name: 'Cycling', time: '30 mins' },
    { name: 'Jump Rope', time: '10 mins' },
    { name: 'Burpees', sets: 3, reps: 20 },
    { name: 'High-Intensity Interval Training (HIIT)', time: '20 mins' },
    { name: 'Rowing', time: '20 mins' },
    { name: 'Stair Climber', time: '15 mins' },
    { name: 'Elliptical', time: '30 mins' },
    { name: 'Swimming', time: '30 mins' },
    { name: 'Kickboxing', time: '20 mins' },
  ],
};

function FitnessSuggestions() {
  const [selectedPart, setSelectedPart] = useState('');
  const [randomSuggestion, setRandomSuggestion] = useState(null);

  const generateRandomSuggestion = () => {
    if (!selectedPart) {
      alert('Please select a body part.');
      return;
    }
    const exercises = fitnessSuggestions[selectedPart];
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
    setRandomSuggestion(randomExercise);
  };

  const clearSelection = () => {
    setSelectedPart('');
    setRandomSuggestion(null);
  };

  return (
    <div className="fitness-suggestions">
      <h1>Fitness Suggestions</h1>
      <div>
        <label htmlFor="body-part-select">Choose a body part:</label>
        <select
          id="body-part-select"
          value={selectedPart}
          onChange={(e) => setSelectedPart(e.target.value)}
        >
          <option value="">Select a body part</option>
          {Object.keys(fitnessSuggestions).map((part) => (
            <option key={part} value={part}>{part}</option>
          ))}
        </select>
      </div>

      <button onClick={generateRandomSuggestion}>Generate Random Exercise</button>

      {randomSuggestion && (
        <div className="suggestion-display">
          <h2>{randomSuggestion.name}</h2>
          <p>Sets: {randomSuggestion.sets || 'N/A'}</p>
          <p>Reps: {randomSuggestion.reps || 'N/A'}</p>
          <p>Time: {randomSuggestion.time || 'N/A'}</p>

          <div className="button-container">
            <button onClick={clearSelection}>Clear</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FitnessSuggestions;

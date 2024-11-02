// src/BMICalculator.js
import React, { useState } from 'react';
import './BMICalculator.css'; // Assuming you have a CSS file for styling

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    // Check if inputs are valid numbers
    if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 100  || heightValue >= 250  || weightValue >= 150  || weightValue <= 20) {
      setResult("Please enter valid height and weight.");
      return;
    }

    const bmi = weightValue / ((heightValue / 100) ** 2);
    let category;

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
    } else if (bmi >= 30 && bmi < 35) {
      category = "Obesity";
    } else {
      category = "Extra Obesity";
    }


   // Display result
    setResult(`Your BMI is ${bmi.toFixed(1)} (${category}).`);
  };

  
  const clearFields = () => {
    setHeight('');
    setWeight('');
    setResult('');
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <form id="bmiForm">
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />

        <div className="button-container">
          <button type="button" onClick={calculateBMI}>Calculate</button>
          <button type="button" onClick={clearFields}>Delete</button>
        </div>
      </form>

      <div id="result">{result}</div>
    </div>
  );
};

export default BMICalculator;
import React, { useState } from 'react';
import './Tracker.css'; // Assuming you have a CSS file for styling

function Tracker() {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [weightError, setWeightError] = useState(''); // State for weight error message
  const [foodName, setFoodName] = useState('');
  const [foodItems, setFoodItems] = useState([]);
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [calories, setCalories] = useState('');

  // Function to calculate daily requirements
  const calculateRequirements = () => {
    let dailyCalories, dailyProtein, dailyFat;

    if (gender === 'male') {
      dailyCalories = 24 * weight;
      dailyProtein = 70;
      dailyFat = 70;
    } else if (gender === 'female') {
      dailyCalories = 22 * weight;
      dailyProtein = 60;
      dailyFat = 55;
    }

    return { dailyCalories, dailyProtein, dailyFat };
  };

  // Handle adding food
  const addFood = () => {
    if (!foodName || !protein || !fat || !calories) {
      alert("Please fill out all fields.");
      return;
    }

    const foodItem = {
      name: foodName,
      protein: parseFloat(protein),
      fat: parseFloat(fat),
      calories: parseFloat(calories),
    };
    setFoodItems([...foodItems, foodItem]);
    // Reset fields
    setFoodName('');
    setProtein('');
    setFat('');
    setCalories('');
  };

  // Validate weight input and calculate total intake
  const validateWeightAndCalculate = () => {
    const weightValue = parseInt(weight, 10);
    if (weightValue < 20 || weightValue > 150) {
      setWeightError("Please enter valid weight.");
      return false;
    } else {
      setWeightError(''); // Clear error message
      return true;
    }
  };

  const totalIntake = foodItems.reduce((totals, item) => {
    totals.protein += item.protein;
    totals.fat += item.fat;
    totals.calories += item.calories;
    return totals;
  }, { protein: 0, fat: 0, calories: 0 });

  const { dailyCalories, dailyProtein, dailyFat } = calculateRequirements();

  const handleCalculate = () => {
    if (validateWeightAndCalculate()) {
      // Proceed with your logic
      console.log("Daily Requirements Calculated!");
    }
  };

  return (
    <div className="tracker">
      <h1>Calorie, Protein, and Fat Tracker</h1>
      <div className="input-group">
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          onBlur={validateWeightAndCalculate} // Validate on blur
        />
        {weightError && <p className="error-message">{weightError}</p>}
      </div>
      <h2>Food Intake</h2>
      <div className="input-group">
        <label>Food Name:</label>
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Protein (g):</label>
        <input
          type="number"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Fat (g):</label>
        <input
          type="number"
          value={fat}
          onChange={(e) => setFat(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Calories:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <button onClick={addFood}>Add Food</button>

      <h2>Today's Requirements:</h2>
      <p>Protein: {dailyProtein} g</p>
      <p>Fat: {dailyFat} g</p>
      <p>Calories: {dailyCalories} kcal</p>

      <h2>Food Log:</h2>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>
            {item.name}: {item.protein} g protein, {item.fat} g fat, {item.calories} kcal
          </li>
        ))}
      </ul>

      <h2>Remaining Intake:</h2>
      <p>Remaining Protein: {dailyProtein - totalIntake.protein} g</p>
      <p>Remaining Fat: {dailyFat - totalIntake.fat} g</p>
      <p>Remaining Calories: {dailyCalories - totalIntake.calories} kcal</p>
      <button onClick={handleCalculate}>Calculate Requirements</button>
    </div>
  );
}

export default Tracker;

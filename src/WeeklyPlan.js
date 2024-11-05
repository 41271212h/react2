import React, { useState } from 'react';
import './WeeklyPlan.css';

const weeklyWorkoutPlan = {
  "1 Day a Week": [
    {
      workout: "Full Body Circuit",
      exercises: [
        { name: "Bicep Curls", sets: 3, reps: 12 },
        { name: "Plank", sets: 3, time: "1 min" },
        { name: "Squats", sets: 3, reps: 15 },
        { name: "Push-ups", sets: 3, reps: 20 },
        { name: "Bent Over Rows", sets: 3, reps: 12 },
        { name: "Running", time: "30 mins" },
      ],
    },
  ],

  "2 Days a Week": [
    {
      workout: "Upper Body & Cardio",
      exercises: [
        { name: "Tricep Dips", sets: 3, reps: 15 },
        { name: "Bench Press", sets: 4, reps: 8 },
        { name: "Pull-ups", sets: 3, reps: 10 },
        { name: "Russian Twists", sets: 3, reps: 15 },
        { name: "Jump Rope", time: "10 mins" },
      ],
    },
    {
      workout: "Lower Body & Core",
      exercises: [
        { name: "Deadlifts", sets: 3, reps: 10 },
        { name: "Lunges", sets: 3, reps: 15 },
        { name: "Leg Raises", sets: 3, reps: 15 },
        { name: "Cycling", time: "30 mins" },
      ],
    },
  ],

  "3 Days a Week": [
    {
      workout: "Upper Body Push",
      exercises: [
        { name: "Dumbbell Shoulder Press", sets: 4, reps: 10 },
        { name: "Chest Fly", sets: 3, reps: 12 },
        { name: "Plank", sets: 3, time: "1 min" },
        { name: "Running", time: "30 mins" },
      ],
    },
    {
      workout: "Lower Body",
      exercises: [
        { name: "Squats", sets: 4, reps: 12 },
        { name: "Leg Press", sets: 3, reps: 15 },
        { name: "Calf Raises", sets: 4, reps: 15 },
        { name: "Toe Touches", sets: 3, reps: 20 },
      ],
    },
    {
      workout: "Upper Body Pull",
      exercises: [
        { name: "Lat Pulldowns", sets: 3, reps: 12 },
        { name: "Seated Rows", sets: 3, reps: 12 },
        { name: "Hammer Curls", sets: 3, reps: 12 },
        { name: "Russian Twists", sets: 3, reps: 15 },
        { name: "Burpees", sets: 3, reps: 20 },
      ],
    },
  ],

  "4 Days a Week": [
    {
      workout: "Chest & Arms",
      exercises: [
        { name: "Bench Press", sets: 4, reps: 8 },
        { name: "Push-ups", sets: 3, reps: 20 },
        { name: "Overhead Tricep Extension", sets: 3, reps: 12 },
        { name: "Bicycle Crunches", sets: 3, reps: 20 },
      ],
    },
    {
      workout: "Back & Cardio",
      exercises: [
        { name: "Pull-ups", sets: 3, reps: 10 },
        { name: "Face Pulls", sets: 3, reps: 15 },
        { name: "Rowing", time: "20 mins" },
        { name: "Side Plank", sets: 3, time: "45 sec each side" },
      ],
    },
    {
      workout: "Legs & Core",
      exercises: [
        { name: "Lunges", sets: 3, reps: 15 },
        { name: "Leg Curls", sets: 3, reps: 12 },
        { name: "Goblet Squats", sets: 3, reps: 15 },
        { name: "Mountain Climbers", sets: 3, time: "1 min" },
      ],
    },
    {
      workout: "Full Body & Cardio",
      exercises: [
        { name: "Incline Dumbbell Press", sets: 4, reps: 10 },
        { name: "Bent Over Rows", sets: 4, reps: 10 },
        { name: "Calf Raises", sets: 4, reps: 15 },
        { name: "Cycling", time: "30 mins" },
      ],
    },
  ],

  "5 Days a Week": [
    {
      workout: "Upper Body Push",
      exercises: [
        { name: "Incline Dumbbell Press", sets: 4, reps: 10 },
        { name: "Close-Grip Bench Press", sets: 3, reps: 10 },
        { name: "Reverse Crunches", sets: 3, reps: 15 },
      ],
    },
    {
      workout: "Lower Body",
      exercises: [
        { name: "Deadlifts", sets: 4, reps: 10 },
        { name: "Leg Extensions", sets: 3, reps: 12 },
        { name: "Plank", sets: 3, time: "1 min" },
        { name: "Stair Climber", time: "15 mins" },
      ],
    },
    {
      workout: "Back & Cardio",
      exercises: [
        { name: "Lat Pulldowns", sets: 3, reps: 12 },
        { name: "T-Bar Rows", sets: 3, reps: 10 },
        { name: "Running", time: "30 mins" },
      ],
    },
    {
      workout: "Arms & Core",
      exercises: [
        { name: "Bicep Curls", sets: 3, reps: 12 },
        { name: "Cable Tricep Pushdown", sets: 3, reps: 15 },
        { name: "Hanging Leg Raises", sets: 3, reps: 12 },
      ],
    },
    {
      workout: "Full Body Circuit",
      exercises: [
        { name: "Squats", sets: 3, reps: 15 },
        { name: "Push-ups", sets: 3, reps: 20 },
        { name: "Superman Exercise", sets: 3, time: "30 sec" },
        { name: "HIIT", time: "20 mins" },
      ],
    },
  ],

  "6 Days a Week": [
    {
      workout: "Chest & Triceps",
      exercises: [
        { name: "Bench Press", sets: 4, reps: 8 },
        { name: "Cable Crossovers", sets: 3, reps: 15 },
        { name: "Tricep Dips", sets: 3, reps: 15 },
      ],
    },
    {
      workout: "Back & Cardio",
      exercises: [
        { name: "Seated Rows", sets: 3, reps: 12 },
        { name: "Single-Arm Dumbbell Row", sets: 3, reps: 12 },
        { name: "Jump Rope", time: "10 mins" },
      ],
    },
    {
      workout: "Legs & Core",
      exercises: [
        { name: "Lunges", sets: 3, reps: 15 },
        { name: "Calf Raises", sets: 4, reps: 15 },
        { name: "Bicycle Crunches", sets: 3, reps: 20 },
      ],
    },
    {
      workout: "Shoulders & Biceps",
      exercises: [
        { name: "Dumbbell Shoulder Press", sets: 4, reps: 10 },
        { name: "Hammer Curls", sets: 3, reps: 12 },
        { name: "Side Plank", sets: 3, time: "45 sec each side" },
      ],
    },
    {
      workout: "Lower Body & Core",
      exercises: [
        { name: "Leg Press", sets: 3, reps: 12 },
        { name: "Bulgarian Split Squats", sets: 3, reps: 10 },
        { name: "Mountain Climbers", sets: 3, time: "1 min" },
      ],
    },
    {
      workout: "Cardio & Full Body Circuit",
      exercises: [
        { name: "Cycling", time: "30 mins" },
        { name: "Push-ups", sets: 3, reps: 20 },
        { name: "Lat Pulldowns", sets: 3, reps: 12 },
        { name: "Goblet Squats", sets: 3, reps: 15 },
      ],
    },
  ],

  "7 Days a Week": [
    {
      workout: "Chest & Abs",
      exercises: [
        { name: "Incline Dumbbell Press", sets: 4, reps: 10 },
        { name: "Chest Fly", sets: 3, reps: 12 },
        { name: "Reverse Crunches", sets: 3, reps: 15 },
      ],
    },
    {
      workout: "Back & Cardio",
      exercises: [
        { name: "Pull-ups", sets: 3, reps: 10 },
        { name: "Bent Over Rows", sets: 4, reps: 10 },
        { name: "Rowing", time: "20 mins" },
      ],
    },
    {
      workout: "Legs",
      exercises: [
        { name: "Deadlifts", sets: 4, reps: 10 },
        { name: "Calf Raises", sets: 4, reps: 15 },
        { name: "Toe Touches", sets: 3, reps: 20 },
      ],
    },
    {
      workout: "Day 4 - Shoulders & Arms",
      exercises: [
        { name: "Dumbbell Shoulder Press", sets: 4, reps: 10 },
        { name: "Tricep Pushdown", sets: 3, reps: 15 },
        { name: "Side Plank", sets: 3, time: "45 sec each side" },
      ],
    },
    {
      workout: "Cardio & Abs",
      exercises: [
        { name: "HIIT", time: "20 mins" },
        { name: "Bicycle Crunches", sets: 3, reps: 20 },
      ],
    },
    {
      workout: "Full Body",
      exercises: [
        { name: "Squats", sets: 3, reps: 15 },
        { name: "Push-ups", sets: 3, reps: 20 },
        { name: "Face Pulls", sets: 3, reps: 15 },
      ],
    },
    {
      workout: "Active Recovery",
      exercises: [
        { name: "Light Cardio", type: "Walking or Cycling", time: "30 mins" },
        { name: "Stretching/Yoga", time: "20-30 mins" },
      ],
    },
  ],
};


const WeeklyWorkoutPlan = () => {
    const [selectedDays, setSelectedDays] = useState("");
    const [selectedPlan, setSelectedPlan] = useState([]);
  
    const handleDaysChange = (e) => {
      const days = e.target.value;
      setSelectedDays(days);
      setSelectedPlan(weeklyWorkoutPlan[`${days} Day${days > 1 ? "s" : ""} a Week`] || []);
    };
  
    return (
      <div className="weekly-workout-plan">
        <h1>Weekly Workout Plan</h1>
        <label>
          Please select a number of days to view your workout plan:
          <select value={selectedDays} onChange={handleDaysChange}>
            <option value="">--Choose--</option>
            <option value="1">1 Day a Week</option>
            <option value="2">2 Days a Week</option>
            <option value="3">3 Days a Week</option>
            <option value="4">4 Days a Week</option>
            <option value="5">5 Days a Week</option>
            <option value="6">6 Days a Week</option>
            <option value="7">7 Days a Week</option>
          </select>
        </label>
  
        <div id="workoutPlanDisplay" className="workout-plan-display">
          {selectedPlan.length === 0 ? (
            <p></p>
          ) : (
            selectedPlan.map((day, index) => (
              <div key={index}>
                <h2>Day {index + 1} - {day.workout}</h2>
                <ul>
                  {day.exercises.map((exercise, i) => (
                    <li key={i}>
                      {exercise.name}: {exercise.sets ? `${exercise.sets} sets of ` : ""}
                      {exercise.reps ? `${exercise.reps} reps` : ""}
                      {exercise.time ? ` for ${exercise.time}` : ""}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default WeeklyWorkoutPlan;
  
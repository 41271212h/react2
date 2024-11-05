import './Recipe.css';
import React, { useState } from 'react';

const recipeList = [
  {
    name: 'Avocado Toast',
    description: 'Quick and easy avocado toast with a sprinkle of seasoning.',
    ingredients: ['1 avocado', '2 slices of bread', 'Salt', 'Pepper'],
    instructions: 'Mash the avocado, spread on toasted bread, and season to taste.',
    calories: 250,
    protein: 6,
    fat: 15,
  },
  {
    name: 'Greek Yogurt Bowl',
    description: 'Healthy yogurt bowl topped with fruits and nuts.',
    ingredients: ['1 cup Greek yogurt', '1/2 cup mixed berries', '1 tbsp honey', '1 tbsp nuts'],
    instructions: 'Combine all ingredients in a bowl, drizzle with honey, and enjoy.',
    calories: 200,
    protein: 12,
    fat: 5,
  },
  {
    name: 'Quinoa Salad',
    description: 'Nutritious salad with quinoa, vegetables, and a light dressing.',
    ingredients: ['1 cup cooked quinoa', '1 cup chopped vegetables', '2 tbsp olive oil', '1 tbsp lemon juice'],
    instructions: 'Mix all ingredients in a bowl and serve chilled.',
    calories: 300,
    protein: 10,
    fat: 12,
  },
  {
    name: 'Chickpea Stew',
    description: 'Hearty stew packed with protein-rich chickpeas and vegetables.',
    ingredients: ['1 can chickpeas', '1 cup diced tomatoes', '1 cup spinach', '1 onion', '2 cloves garlic'],
    instructions: 'Sauté onion and garlic, add tomatoes and chickpeas, simmer, and add spinach until wilted.',
    calories: 250,
    protein: 12,
    fat: 4,
  },
  {
    name: 'Oatmeal with Fruits',
    description: 'Warm oatmeal topped with seasonal fruits and nuts.',
    ingredients: ['1 cup rolled oats', '2 cups water or milk', '1 banana', '1 tbsp nuts'],
    instructions: 'Cook oats in water/milk, top with sliced banana and nuts before serving.',
    calories: 300,
    protein: 8,
    fat: 10,
  },
  {
    name: 'Smoothie Bowl',
    description: 'Refreshing smoothie bowl with assorted toppings.',
    ingredients: ['1 cup spinach', '1 banana', '1/2 cup almond milk', '1/4 cup granola'],
    instructions: 'Blend spinach, banana, and almond milk until smooth, pour into a bowl, and top with granola.',
    calories: 200,
    protein: 5,
    fat: 5,
  },
  {
    name: 'Baked Salmon',
    description: 'Delicious salmon fillet baked with herbs and lemon.',
    ingredients: ['1 salmon fillet', '1 tbsp olive oil', '1 lemon', 'Salt and pepper'],
    instructions: 'Drizzle olive oil on salmon, season with salt and pepper, bake at 375°F for 15-20 minutes.',
    calories: 350,
    protein: 25,
    fat: 20,
  },
  {
    name: 'Vegetable Stir-Fry',
    description: 'Quick stir-fried vegetables in a savory sauce.',
    ingredients: ['2 cups mixed vegetables', '2 tbsp soy sauce', '1 tbsp olive oil', '1 clove garlic'],
    instructions: 'Sauté garlic in olive oil, add vegetables, stir-fry until cooked, then add soy sauce.',
    calories: 150,
    protein: 5,
    fat: 7,
  },
  {
    name: 'Egg and Spinach Wrap',
    description: 'Healthy wrap filled with scrambled eggs and spinach.',
    ingredients: ['2 eggs', '1 cup spinach', '1 whole grain wrap', 'Salt and pepper'],
    instructions: 'Scramble eggs, add spinach until wilted, then wrap in the whole grain wrap.',
    calories: 250,
    protein: 15,
    fat: 10,
  },
  {
    name: 'Fruit Salad',
    description: 'Refreshing mix of seasonal fruits for a healthy snack.',
    ingredients: ['1 cup mixed fruits (berries, melon, apple)', '1 tbsp lime juice'],
    instructions: 'Combine all fruits in a bowl, drizzle with lime juice, and serve chilled.',
    calories: 150,
    protein: 2,
    fat: 1,
  },
  {
    name: 'Zucchini Noodles',
    description: 'Low-carb zucchini noodles tossed with garlic and olive oil.',
    ingredients: ['2 zucchinis', '2 cloves garlic', '2 tbsp olive oil', 'Salt and pepper'],
    instructions: 'Spiralize the zucchinis, sauté garlic in olive oil, add zucchini noodles, cook for a few minutes.',
    calories: 100,
    protein: 3,
    fat: 7,
  },
  {
    name: 'Peanut Butter Banana Toast',
    description: 'Whole grain toast topped with peanut butter and banana slices.',
    ingredients: ['2 slices whole grain bread', '2 tbsp peanut butter', '1 banana'],
    instructions: 'Spread peanut butter on toast and top with banana slices.',
    calories: 300,
    protein: 10,
    fat: 15,
  },
  {
    name: 'Cottage Cheese and Pineapple',
    description: 'Creamy cottage cheese served with sweet pineapple chunks.',
    ingredients: ['1 cup cottage cheese', '1/2 cup pineapple chunks'],
    instructions: 'Combine cottage cheese with pineapple and serve chilled.',
    calories: 200,
    protein: 18,
    fat: 4,
  },
  {
    name: 'Stuffed Bell Peppers',
    description: 'Bell peppers stuffed with a mixture of quinoa, black beans, and spices.',
    ingredients: ['2 bell peppers', '1 cup cooked quinoa', '1 can black beans', '1 tsp cumin'],
    instructions: 'Mix quinoa, black beans, and cumin, stuff into bell peppers, and bake at 350°F for 30 minutes.',
    calories: 250,
    protein: 12,
    fat: 3,
  },
  {
    name: 'Chia Seed Pudding',
    description: 'Nutritious pudding made with chia seeds and almond milk.',
    ingredients: ['1/4 cup chia seeds', '1 cup almond milk', '1 tbsp maple syrup'],
    instructions: 'Combine all ingredients, let sit for a few hours or overnight, and serve chilled.',
    calories: 180,
    protein: 5,
    fat: 8,
  },
];


function Recipe() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="recipe-container">
      <h1>Healthy Recipes</h1>
      {selectedRecipe ? (
        <div className="recipe-details">
          <h2>{selectedRecipe.name}</h2>
          <p>{selectedRecipe.description}</p>
          <h3>Ingredients:</h3>
          <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{selectedRecipe.instructions}</p>
          <p>Calories: {selectedRecipe.calories} kcal</p>
          <p>Protein: {selectedRecipe.protein} g</p>
          <p>Fat: {selectedRecipe.fat} g</p>
          <button onClick={() => setSelectedRecipe(null)}>Back to Recipes</button>
        </div>
      ) : (
        <div className="recipe-list">
          {recipeList.map((recipe, index) => (
            <div key={index} className="recipe-item" onClick={() => setSelectedRecipe(recipe)}>
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Recipe;

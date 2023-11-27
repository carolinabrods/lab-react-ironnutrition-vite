import { useState } from 'react';
import './App.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  // Iteration 1: Store data in the state
  const [foods, setFoods] = useState(foodsJson);

  /*   const food1 = {
    name: 'Orange',
    calories: 85,
    image: 'https://i.imgur.com/abKGOcv.jpg',
    servings: 1,
  }; */

  const deleteFood = id => {
    const filteredFoods = foods.filter(food => id !== food.id);

    setFoods(filteredFoods);
  };

  // Iteration 5: Add New Food - Function
  const addFood = food => {
    const updatedFoods = [food, ...foods];
    setFoods(updatedFoods);
  };

  return (
    <div className='App'>
      <h1>LAB | React IronNutrition</h1>
      {/* Iteration 5: Add New Food */}
      <AddFoodForm addFood={addFood} />

      {/* Iteration 3: Render a list of FoodBox components */}
      {/* map the foods array to create food boxes */}
      {foods.map(food => {
        return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />;
      })}
    </div>
  );
}

export default App;

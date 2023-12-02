import { useState } from 'react';
import foodsJson from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import SearchBar from './SearchBar';

function FoodList() {
  // Iteration 1: Store data in the state
  const [foods, setFoods] = useState(foodsJson);

  // create a state only for the foods we want to show when using the search bar
  const [showFoods, setShowFoods] = useState(foodsJson);

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

  // Iteration 8: Search bar
  const searchedFoods = query => {
    const selectedFoods = foods.filter(food => {
      return food.name.toLowerCase().includes(query.toLowerCase());
    });

    setShowFoods(selectedFoods);
  };

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>
      {/* Iteration 5: Add New Food */}
      <AddFoodForm addFood={addFood} />

      {/* Iteration 8: Search bar */}
      <SearchBar searchedFoods={searchedFoods} />

      {/* Iteration 3: Render a list of FoodBox components */}
      {/* map the foods array to create food boxes */}
      <h2>Food List</h2>
      <div className='food-list'>
        {showFoods.map(food => {
          return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />;
        })}
      </div>

      {showFoods.length === 0 && (
        <h3>Oops! There is no more content to show. 😢</h3>
      )}
    </div>
  );
}

export default FoodList;

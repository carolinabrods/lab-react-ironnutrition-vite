// Iteration 2: FoodBox component
function FoodBox({ food, deleteFood }) {
  // props = food

  return (
    <div>
      <p>{food.name}</p>

      <img src={food.image} />

      <p>Calories: {food.calories}</p>
      <p>
        Servings <b>{food.servings}</b>
      </p>

      <p>
        <b>Total Calories: {food.servings * food.calories}</b> kcal
      </p>
      {/* Iteration 4: Delete List items */}
      {/* Using the delete function received from the App component */}
      <button onClick={() => deleteFood(food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;

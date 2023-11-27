import { useState } from 'react';

// Iteration 5: Add New Food

function AddFoodForm({ addFood }) {
  // props = food
  // properties: id, name, image, calories, servings

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  // Handler functions
  const handleName = e => setName(e.target.value);
  const handleImage = e => setImage(e.target.value);
  const handleCalories = e => setCalories(e.target.value);
  const handleServings = e => setServings(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newFood = {
      id: Math.random(),
      name,
      image,
      calories,
      servings,
    };

    addFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <h2>Add Food</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={handleName}
        />
        <label htmlFor='image'>Image:</label>
        <input
          type='text'
          name='image'
          id='image'
          value={image}
          onChange={handleImage}
        />
        <label htmlFor='calories'>Calories:</label>
        <input
          type='number'
          name='calories'
          id='calories'
          min={0}
          value={calories}
          onChange={handleCalories}
        />
        <label htmlFor='servings'>Servings:</label>
        <input
          type='number'
          name='servings'
          id='servings'
          min={0}
          value={servings}
          onChange={handleServings}
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;

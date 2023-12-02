import { useState } from 'react';
import { Divider, Input, Button } from 'antd';

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
    <>
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        <label>Name:</label>
        <Input name='name' value={name} type='text' onChange={handleName} />

        <label>Image URL:</label>
        <Input name='image' value={image} type='text' onChange={handleImage} />

        <label>Calories:</label>
        <Input
          name='calories'
          value={calories}
          type='number'
          onChange={handleCalories}
        />

        <label>Servings</label>
        <Input
          name='servings'
          value={servings}
          type='number'
          min={0}
          onChange={handleServings}
        />

        <Button type='submit'>Create</Button>
      </form>
    </>
  );
}

export default AddFoodForm;

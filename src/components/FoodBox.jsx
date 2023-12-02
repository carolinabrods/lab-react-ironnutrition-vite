// Iteration 7: Ant Design
import { Card, Col, Button } from 'antd';

// Iteration 2: FoodBox component
function FoodBox({ food, deleteFood }) {
  // props = food

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 350, margin: 10 }}>
        <img src={food.image} height={60} alt='food' />
        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings}</b> kcal
        </p>
        <Button type='primary' onClick={() => deleteFood(food.id)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;

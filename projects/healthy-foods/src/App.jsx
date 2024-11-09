import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];

  let [foodItems, setFoodItems] = useState([
    "Green vegetables",
    "Roti",
    "Salad",
    "Milk",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <Container>
      <h1 className="foodHeading">Healthy Foods</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage props={foodItems}></ErrorMessage>
      <FoodItems foodItems={foodItems}></FoodItems>
    </Container>
  );
}

export default App;

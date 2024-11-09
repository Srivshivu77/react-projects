import Items from "./Items";
import { useState } from "react";

const FoodItems = ({ foodItems }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (Item, event) => {
    let newItems = [...activeItems, Item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {foodItems.map((Item) => (
        <Items
          key={Item}
          Item={Item}
          bought={activeItems.includes(Item)}
          handleBuyButton={(event) => onBuyButton(Item, event)}
        ></Items>
      ))}
    </ul>
  );
};
export default FoodItems;

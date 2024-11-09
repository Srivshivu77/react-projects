import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { todoitem: itemName, date: itemDueDate },
    ]);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter(
      (item) => item.todoitem !== todoItemName
    );
    setTodoItems(newTodoItem);
  };
  return (
    <>
      <center className="todo-container">
        <AppName />
        <div className="components">
          <AddTodo onNewItem={handleNewItem} />
          {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
          <TodoItems
            todoItems={todoItems}
            onDeleteClick={handleDeleteItem}
          ></TodoItems>
        </div>
      </center>
    </>
  );
}

export default App;

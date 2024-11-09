import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {
  const todoItems = [
    { todoitem: "buy milk", date: "4/10/23" },
    { todoitem: "Go to college", date: "4/10/23" },
    { todoitem: "complete code", date: "4/10/23" },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <div className="components">
          <AddTodo />
          <TodoItems todoItems={todoItems}></TodoItems>
        </div>
      </center>
    </>
  );
}

export default App;

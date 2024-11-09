import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={css.textContainer}>
        {todoItems.map((Item) => (
          <TodoItem
            key={Item.todoitem}
            todoitem={Item.todoitem}
            date={Item.date}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;

import "bootstrap/dist/css/bootstrap.min.css";
import { MdDeleteOutline } from "react-icons/md";
function TodoItem({ todoitem, date, onDeleteClick }) {
  return (
    <>
      <div className="container">
        <div className="row new-row">
          <div className="col-6">{todoitem}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger new-button"
              onClick={() => onDeleteClick(todoitem)}
            >
              <MdDeleteOutline />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;

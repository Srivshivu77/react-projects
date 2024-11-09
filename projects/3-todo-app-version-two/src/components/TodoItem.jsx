import "bootstrap/dist/css/bootstrap.min.css";
function TodoItem({ todoitem, date }) {
  return (
    <>
      <div className="container">
        <div className="row new-row">
          <div className="col-6">{todoitem}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger new-button">
              delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;

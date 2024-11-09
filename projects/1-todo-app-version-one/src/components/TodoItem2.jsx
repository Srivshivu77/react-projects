import "bootstrap/dist/css/bootstrap.min.css";
function TodoItem2() {
  let todoitem = "Go to college";
  let date = "4/10/23";
  return (
    <>
      <div class="container">
        <div class="row new-row">
          <div class="col-6">{todoitem}</div>
          <div class="col-4">{date}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger new-button">
              delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem2;

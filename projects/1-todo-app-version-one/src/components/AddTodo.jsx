import "bootstrap/dist/css/bootstrap.min.css";
function AddTodo() {
  return (
    <>
      <div class="container text-center">
        <div class="row new-row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo here"></input>
          </div>
          <div class="col-4">
            <input type="date"></input>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success new-button">
              add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;

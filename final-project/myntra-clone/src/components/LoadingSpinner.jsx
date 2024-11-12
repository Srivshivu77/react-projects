const LoadingSpinner = () => {
  return (
    <center>
      <div
        className="spinner-border spinner"
        style={{ height: "5rem", width: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};

export default LoadingSpinner;

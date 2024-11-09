import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Container from "./components/Container";
function App() {
  return (
    <>
      <center className="px-4 py-5 my-5 text-centre">
        <div>
          <Container>
            <Header></Header>
          </Container>
        </div>
      </center>
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.css";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="col-8 ">
          <div className="d-flex justify-content-center">
            <Calculator />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

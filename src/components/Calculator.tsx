import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import Operators from "./Operators";
import Numbers from "./Numbers";
import Display from "./Display";
import useCalculator from "../hooks/useCalculator";

function Calculator() {
  const {
    state,
    handleClear,
    handleDecimalPoint,
    handleDelete,
    handleFinalResult,
    handleNumber,
    handleOperator,
  } = useCalculator();

  console.log(state);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div id="calculator-container">
            <div className="container-fluid mb-3">
              <div className="row justify-content-center">
                <div className="col-12">
                  <Display state={state} />
                </div>
              </div>
            </div>
            <div>
              <div className="container-fluid">
                <Operators
                  operators={["+", "-", "*", "/"]}
                  handleOperator={handleOperator}
                />
                <div className="row my-1">
                  <div className="col-9">
                    <Numbers numbers={[1, 2, 3]} handleNumber={handleNumber} />
                    <Numbers numbers={[4, 5, 6]} handleNumber={handleNumber} />
                    <Numbers numbers={[7, 8, 9]} handleNumber={handleNumber} />
                  </div>
                  <div className="col-3 d-flex align-items-stretch justify-content-center my-3 px-0">
                    <OperatorButton
                      operator="="
                      handleOperator={handleFinalResult}
                      id="equal-button"
                    />
                  </div>
                </div>
                <div className="row my-1 justify-content-center">
                  <div className="col-12 m-0 px-3 d-flex justify-content-between">
                    <OperatorButton
                      operator="."
                      handleOperator={handleDecimalPoint}
                    />
                    <NumberButton
                      number={0}
                      handleNumber={() => handleNumber(0)}
                    />
                    <OperatorButton
                      operator="Clear"
                      handleOperator={handleClear}
                    />
                    <OperatorButton
                      operator="←"
                      handleOperator={handleDelete}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

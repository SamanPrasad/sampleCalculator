import OperatorButton from "./OperatorButton";

interface Props {
  operators: string[];
  handleOperator: (operator: string) => void;
}

function Operators({ operators, handleOperator }: Props) {
  return (
    <div className="row justify-content-center my-1">
      <div className="col-12 px-3 d-flex justify-content-between">
        {operators.map((op, index) => {
          return (
            <OperatorButton
              key={index}
              operator={op}
              handleOperator={handleOperator}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Operators;

interface Props {
  operator: string;
  handleOperator: (operator: string) => void;
  id?: string;
}

function OperatorButton({ operator, handleOperator, id }: Props) {
  return (
    <button
      className="calculator-button operator-button"
      id={id}
      onClick={() => handleOperator(operator)}
    >
      {operator}
    </button>
  );
}

export default OperatorButton;

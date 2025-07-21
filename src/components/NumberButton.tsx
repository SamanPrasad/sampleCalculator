interface Props {
  number: number;
  handleNumber: () => void;
}

function NumberButton({ number, handleNumber }: Props) {
  return (
    <button
      className="calculator-button number-button"
      onClick={() => handleNumber()}
    >
      {number}
    </button>
  );
}

export default NumberButton;

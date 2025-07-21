import NumberButton from "./NumberButton";

interface Props {
  numbers: number[];
  handleNumber: (number: number) => void;
}

function Numbers({ numbers, handleNumber }: Props) {
  return (
    <>
      <div className="row justify-content-center my-2">
        <div className="col-12 d-flex justify-content-between">
          {numbers.map((number) => {
            return (
              <NumberButton
                key={number}
                number={number}
                handleNumber={() => handleNumber(number)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Numbers;

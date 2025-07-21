import type { State } from "../hooks/useCalculator";

interface Props {
  state: State;
}

function Display({ state }: Props) {
  return (
    <>
      <div id="display">
        {state.error == null && (
          <div id="display-previous-value" className="d-flex ">
            <div className="flex-grow-1 p-1 text-break text-end">
              {state.operator && state.preVal}
            </div>
            <div className="p-1">{state.operator}</div>
          </div>
        )}
        <div>
          <div className="col-12">
            <h2
              className={
                state.error
                  ? "text-wrap text-end text-danger"
                  : "text-wrap text-end"
              }
              style={{ wordWrap: "break-word" }}
            >
              {state.error == null ? state.currentVal : state.error}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;

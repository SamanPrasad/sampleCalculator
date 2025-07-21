import Big from "big.js";
import { useState } from "react";

export interface State {
  preVal: string;
  currentVal: string;
  operator: string | null;
  error: string | null;
  status: "final" | "cleared";
}

function useCalculator() {
  const [state, setState] = useState<State>({
    preVal: "0",
    currentVal: "0",
    operator: null,
    error: null,
    status: "cleared",
  });

  const handleNumber = (value: number) => {
    if (state.currentVal == "0" && value == 0) {
      return;
    }

    setState({
      ...state,
      currentVal:
        state.currentVal == "0"
          ? value.toString()
          : state.currentVal + value.toString(),
    });
  };

  const handleDelete = () => {
    if (state.status == "final") {
      handleClear();
      return;
    }
    const currentVal = state.currentVal.slice(0, -1);
    setState({ ...state, currentVal: currentVal ? currentVal : "0" });
  };

  const handleClear = () => {
    setState({
      ...state,
      currentVal: "0",
      preVal: "0",
      operator: null,
      error: null,
      status: "cleared",
    });
  };

  const calculate = (op: string) => {
    const operations: { [operator: string]: (a: Big, b: Big) => Big } = {
      "+": (a: Big, b: Big) => a.plus(b),
      "-": (a: Big, b: Big) => a.minus(b),
      "*": (a: Big, b: Big) => a.times(b),
      "/": (a: Big, b: Big) => {
        if (b.eq(0)) {
          throw new Error("Cannot divide by Zero");
        }
        return a.div(b);
      },
    };

    return operations[op](new Big(state.preVal), new Big(state.currentVal));
  };

  const handleFinalResult = () => {
    if (!state.operator) {
      return;
    }

    try {
      setState({
        ...state,
        preVal: "0",
        currentVal: calculate(state.operator).toFixed(),
        operator: null,
        status: "final",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setState({
          ...state,
          preVal: "0",
          currentVal: "0",
          operator: null,
          status: "final",
          error: error.message,
        });
      }
    }
  };

  const handleDecimalPoint = () => {
    if (state.currentVal.includes(".")) return;
    setState({ ...state, currentVal: state.currentVal + "." });
  };

  const handleOperator = (op: string) => {
    if (state.operator) {
      const result = calculate(state.operator).toFixed();
      setState({
        ...state,
        preVal: result,
        currentVal: "0",
        operator: op,
      });
    } else {
      setState({
        ...state,
        preVal: state.currentVal,
        currentVal: "0",
        operator: op,
      });
    }
  };

  return {
    state,
    handleNumber,
    handleDelete,
    handleClear,
    handleFinalResult,
    handleDecimalPoint,
    handleOperator,
  };
}

export default useCalculator;

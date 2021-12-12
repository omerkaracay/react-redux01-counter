import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "../redux/Counter/CounterSlice";

function CounterView() {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(countValue);

  return (
    <div>
      <h1>Counter</h1>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(decreament())} className="button">
        ➖
      </button>
      <button onClick={() => dispatch(increament())} className="button">
        ➕
      </button>
    </div>
  );
}

export default CounterView;

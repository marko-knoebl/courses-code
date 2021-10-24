import  { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import Number from "./Number";

function Counter(props) {
  const [number, setNumber] = useState(props.startValue | 0);
  return (
    <div>
      <Number value={number} />
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
}

function renderCounter(props, node) {
  ReactDOM.render(<Counter {...props} />, node);
}

export default Counter;

export { renderCounter };

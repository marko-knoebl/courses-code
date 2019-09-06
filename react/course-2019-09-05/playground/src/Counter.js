import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={"counter " + (count > 10 ? "high" : "low")}>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{
          fontSize: count + 10
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </div>
  );
}

export default Counter;

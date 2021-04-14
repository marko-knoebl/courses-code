import { useState, useEffect, useRef } from "react";

function CounterThatLogsEverySecond() {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  useEffect(() => {
    setInterval(() => {
      console.log(countRef.current);
    }, 1000);
  }, []);
  return (
    <div>
      {count}{" "}
      <button
        onClick={() => {
          setCount(count + 1);
          countRef.current = count + 1;
        }}
      >
        +
      </button>
    </div>
  );
}

export default CounterThatLogsEverySecond;

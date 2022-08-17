import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function startCounting() {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return intervalId;
  }

  useEffect(() => {
    const intervalId = startCounting();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => startCounting()}>start</button>
    </div>
  );
}

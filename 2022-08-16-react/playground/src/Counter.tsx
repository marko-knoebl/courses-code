import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function startCounting() {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }

  useEffect(startCounting, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => startCounting()}>start</button>
    </div>
  );
}

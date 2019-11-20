import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className="btn" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <button className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;

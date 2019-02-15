import React, { useState } from 'react';

const HooksDemo = props => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
    </div>
  );
};

export default HooksDemo;

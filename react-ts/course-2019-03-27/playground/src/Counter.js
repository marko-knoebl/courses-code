import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('mytitle');

  return (
    <div>
      <h3>{title}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
          setTitle('modified');
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
};

export default Counter;

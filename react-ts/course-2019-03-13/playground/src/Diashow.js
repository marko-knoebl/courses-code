import React, { useState } from 'react';

const Diashow = () => {
  const [imgIndex, setImgIndex] = useState(10);

  const prevImg = () => {
    setImgIndex(Math.max(imgIndex - 1, 0));
  };

  const nextImg = () => {
    setImgIndex(imgIndex + 1);
  };

  const reset = () => {
    setImgIndex(10);
  };

  return (
    <div>
      <h1>Diashow</h1>
      <button onClick={reset}>start</button>
      <button onClick={prevImg} disabled={imgIndex === 0}>
        {'<'}
      </button>
      <img
        src={`https://picsum.photos/200?image=${imgIndex}`}
        alt="from diashow"
      />
      <button onClick={nextImg}>{'>'}</button>
    </div>
  );
};

export default Diashow;

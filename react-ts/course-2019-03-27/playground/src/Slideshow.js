import React, { useState } from 'react';

const getImgUrl = id => 'https://picsum.photos/200?image=' + id.toString();

const Slideshow = () => {
  const [index, setIndex] = useState(10);

  return (
    <div>
      <button
        onClick={() => {
          setIndex(10);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1);
          }
        }}
      >
        prev
      </button>
      <img src={getImgUrl(index)} alt="" />
      <button
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        next
      </button>
    </div>
  );
};

export default Slideshow;

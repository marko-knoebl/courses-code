import React, { useState } from "react";

const Slideshow = () => {
  let [imgId, setImgId] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setImgId(Math.max(imgId - 1, 0));
        }}
      >
        prev
      </button>
      <img src={`https://picsum.photos/200?image=${imgId}`} alt="slideshow" />
      <button
        onClick={() => {
          setImgId(imgId + 1);
        }}
      >
        next
      </button>
    </div>
  );
};

export default Slideshow;

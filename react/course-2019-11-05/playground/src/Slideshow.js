import React, { useState } from "react";

const Slideshow = () => {
  const [imgId, setImgId] = useState(10);

  return (
    <div>
      <button
        onClick={() => {
          if (imgId > 0) {
            setImgId(imgId - 1);
          }
        }}
        disabled={imgId === 0}
      >
        prev
      </button>
      <img src={"https://picsum.photos/200?image=" + imgId} alt="slideshow" />
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

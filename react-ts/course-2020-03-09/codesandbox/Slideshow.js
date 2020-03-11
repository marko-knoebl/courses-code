import React, { useState } from "react";

function Slideshow() {
  const [imgId, setImgId] = useState(10);

  const imgUrl = "https://picsum.photos/200?image=" + imgId.toString();
  return (
    <div>
      <h2>slideshow</h2>
      <button
        onClick={() => {
          setImgId(10);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          if (imgId > 0) {
            setImgId(imgId - 1);
          }
        }}
      >
        previous
      </button>
      <img src={imgUrl} alt="slideshow" />
      <button
        onClick={() => {
          setImgId(imgId + 1);
        }}
      >
        next
      </button>
    </div>
  );
}

export default Slideshow;

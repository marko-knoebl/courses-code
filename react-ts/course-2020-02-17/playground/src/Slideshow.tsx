import React, { useState } from "react";

function Slideshow() {
  const [imgId, setImgId] = useState(10);

  const imgUrl = "https://picsum.photos/200?image=" + imgId;

  function nextImg() {
    setImgId(imgId + 1);
  }
  function prevImg() {
    if (imgId > 0) {
      setImgId(imgId - 1)
    }
  }

  return (
    <div>
      <button onClick={prevImg}>prev</button>
      <img src={imgUrl} alt="slideshow" />
      <button onClick={nextImg}>next</button>
    </div>
  );
}

export default Slideshow;

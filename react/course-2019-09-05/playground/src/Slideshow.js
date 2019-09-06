import React, { useState } from "react";

function Slideshow() {
  const [imgId, setImgId] = useState(10);

  return (
    <div>
      <button
        onClick={() => {
          if (imgId > 0) {
            setImgId(imgId - 1);
          }
        }}
      >
        {"<"}
      </button>{" "}
      <img src={"https://picsum.photos/200?image=" + imgId} alt="slideshow" />{" "}
      <button
        onClick={() => {
          setImgId(imgId + 1);
        }}
      >
        {">"}
      </button>
    </div>
  );
}

export default Slideshow;

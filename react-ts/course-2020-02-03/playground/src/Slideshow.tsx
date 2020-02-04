import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const Slideshow = () => {
  const [imgId, setImgId] = useState(10);
  return (
    <div>
      <h2>Slideshow</h2>
      <Button
        variant="contained"
        onClick={() => {
          setImgId(0);
        }}
      >
        start
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (imgId > 0) {
            setImgId(imgId - 1);
          }
        }}
        disabled={imgId === 0}
      >
        prev
      </Button>
      <img src={`https://picsum.photos/200?image=${imgId}`} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setImgId(imgId + 1);
        }}
      >
        next
      </Button>
    </div>
  );
};

export default Slideshow;

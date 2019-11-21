import React, { useState } from "react";
//import Button from "@material-ui/core/Button"
import { Button } from "@material-ui/core";

const Slideshow = () => {
  const [imgId, setImgId] = useState(10);

  return (
    <div>
      <Button
        onClick={() => {
          if (imgId > 0) {
            setImgId(imgId - 1);
          }
        }}
        disabled={imgId === 0}
        variant="contained"
        color="primary"
      >
        prev
      </Button>
      <img src={"https://picsum.photos/200?image=" + imgId} alt="slideshow" />
      <Button
        onClick={() => {
          setImgId(imgId + 1);
        }}
        variant="contained"
        color="primary"
      >
        next
      </Button>
    </div>
  );
};

export default Slideshow;

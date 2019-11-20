import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

function Slideshow() {
  const [imgId, setImgId] = useState(10);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        disabled={imgId === 0}
        onClick={() => {
          if (imgId > 0) {
            setImgId(imgId - 1);
          }
        }}>
        prev
      </Button>
      <img src={`https://picsum.photos/200?image=${imgId}`} alt="slideshow" />
      <Button
        onClick={() => setImgId(imgId + 1)}
        variant="contained"
        color="primary">
        next
      </Button>
    </div>
  );
}

export default Slideshow;

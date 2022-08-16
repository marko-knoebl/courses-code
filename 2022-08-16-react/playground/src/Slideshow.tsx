import { useState } from "react";

import "./Slideshow.css";

function Slideshow() {
  const [imgId, setImgId] = useState(0);
  // abgeleiteter Wert
  const imgUrl = "https://picsum.photos/300/200?image=" + imgId;

  const nextThumbnailUrl = "https://picsum.photos/60/40?image=" + (imgId + 1);
  const previousThumbnailUrl =
    "https://picsum.photos/60/40?image=" + (imgId - 1);

  function goToPreviousImg() {
    if (imgId !== 0) {
      setImgId(imgId - 1);
    }
  }

  function goToRandomImg() {
    // go to random image (0 - 99)
    setImgId(Math.floor(Math.random() * 100));
  }

  // generate an array of up to 5 preview ids
  const previewIds = [];
  for (let i = imgId - 2; i <= imgId + 2; i++) {
    if (i >= 0) {
      previewIds.push(i);
    }
  }

  return (
    <div className="Slideshow__Container">
      <h2>image {imgId}</h2>
      <div>
        {imgId > 0 ? (
          <img src={previousThumbnailUrl} alt="previous thumbnail" />
        ) : null}
        <img
          src={imgUrl}
          alt="slideshow"
          className={
            imgId % 2 === 0
              ? "Slideshow__Image Slideshow__Image--Even"
              : "Slideshow__Image"
          }
        />
        <img src={nextThumbnailUrl} alt="next thumbnail" />
      </div>
      <button onClick={() => setImgId(0)} className="Slideshow__Button">
        start
      </button>
      {imgId > 0 && (
        <button onClick={goToPreviousImg} className="Slideshow__Button">
          previous
        </button>
      )}

      <button onClick={() => setImgId(imgId + 1)} className="Slideshow__Button">
        next
      </button>
      <button onClick={goToRandomImg} className="Slideshow__Button">
        random
      </button>
      <div className="Slideshow__Thumbnails">
        {previewIds.map((id) => (
          <img
            src={"https://picsum.photos/60/40?image=" + id}
            alt="thumbnail"
            onClick={() => setImgId(id)}
            key={id}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;

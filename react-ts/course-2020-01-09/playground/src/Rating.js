import React from "react";

function Rating({ stars, onStarsChange }) {
  const starSpans = [];
  for (let i = 1; i <= 5; i++) {
    const active = i <= stars;
    starSpans.push(
      <span
        style={{ color: active ? "gold" : "lightgrey", userSelect: "none" }}
        key={i}
        onClick={() => {
          // trigger event "onStarsChange"
          onStarsChange(i);
        }}
      >
        {active ? "★" : "☆"}
      </span>
    );
  }
  return <span>{starSpans}</span>;
}

export default Rating;

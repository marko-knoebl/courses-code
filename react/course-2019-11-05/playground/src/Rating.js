import React from "react";

const Rating = props => {
  const starElements = [];

  for (let i = 1; i <= 5; i++) {
    const active = i <= props.stars;
    starElements.push(
      <span
        key={i}
        style={{ color: active ? "gold" : "lightgrey" }}
        onClick={(event) => props.onStarsChange(i)}
      >
        {active ? "★" : "☆"}
      </span>
    );
  }

  return <div className="rating">{starElements}</div>;
};

export default Rating;

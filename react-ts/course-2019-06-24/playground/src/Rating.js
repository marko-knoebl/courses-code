import React from "react";

import "./Rating.css";

const Rating = props => {
  const starIds = [1, 2, 3, 4, 5];

  if (![1, 2, 3, 4, 5].includes(props.stars)) {
    throw new Error("Invalid number of stars");
  }

  return (
    <div>
      {starIds.map(starId => {
        const isActive = starId <= props.stars;
        return (
          <span
            key={starId}
            className={"star" + (isActive ? " active": "")}
            onClick={() => {
              props.onStarsChange(starId);
            }}
          >
            {isActive ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;

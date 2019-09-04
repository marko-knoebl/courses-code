import React from "react";
import "./Rating.css";

const Rating = ({ stars, onChange }) => {
  if (![1, 2, 3, 4, 5].includes(stars)) {
    throw new Error("number of stars must be one of 1, 2, 3, 4, 5");
  }

  const starIds = [1, 2, 3, 4, 5];

  return (
    <div>
      {starIds.map(id => (
        <span
          key={id}
          className={`star${id <= stars ? " active" : ""}`}
          onClick={() => {
            onChange(id);
          }}
        >
          {id <= stars ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default Rating;

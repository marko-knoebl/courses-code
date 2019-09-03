import React from "react";
import "./Rating.css";

const Rating = ({ stars, onChange }) => {
  const starIds = [1, 2, 3, 4, 5];

  return (
    <div>
      {starIds.map(id => (
        <span
          key={id}
          className={id <= stars ? "star active" : "star"}
          onClick={() => {onChange(id)}}
        >
          {id <= stars ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default Rating;

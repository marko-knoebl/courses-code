import React, { FC } from "react";

type RatingProps = {
  stars: number;
  onChange?: (newRating: number) => void;
};

// google for: unicode stars -> ★ / ☆

//function Rating(props: RatingProps) {
const Rating: FC<RatingProps> = props => {
  if (props.stars === 0) {
    throw new Error("stars cannot be 0");
  }
  const starSpans = [];
  for (let i = 1; i <= 5; i++) {
    let symbol;
    let className;
    if (i <= props.stars) {
      symbol = "★";
      className = "active";
    } else {
      symbol = "☆";
      className = "";
    }
    starSpans.push(
      <span
        key={i}
        onClick={() => {
          if (props.onChange) {
            props.onChange(i);
          }
        }}
        className={className}
      >
        {symbol}
      </span>
    );
  }
  return <div>{starSpans}</div>;
};

export default Rating;

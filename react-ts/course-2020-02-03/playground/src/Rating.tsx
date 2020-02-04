import React from "react";

type RatingProps = {
  stars: number;
  onChange: (newStars: number) => void;
};

const styles = {
  active: {
    color: "gold"
  },
  inactive: {
    color: "lightgrey"
  }
};

const Rating = (props: RatingProps) => {
  const starElements = [];
  for (let i = 1; i <= 5; i++) {
    starElements.push(
      <span
        key={i}
        style={i <= props.stars ? styles.active : styles.inactive}
        onClick={() => {
          props.onChange(i);
        }}
      >
        {i <= props.stars ? "★" : "☆"}
      </span>
    );
  }
  return <div>{starElements}</div>;
};

export default Rating;

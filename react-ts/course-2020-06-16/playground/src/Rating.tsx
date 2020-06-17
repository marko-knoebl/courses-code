import React, { memo } from "react";

type RatingProps = {
  stars: number;
  onChange?: (newRating: number) => void;
};

function Rating({ stars, onChange }: RatingProps) {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div>
      {starIds.map((id) => (
        <span
          onClick={() => {
            if (onChange) {
              onChange(id);
            }
          }}
          className={"star " + (stars >= id ? "active" : "inactive")}
          key={id}
        >
          {stars >= id ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default memo(Rating);

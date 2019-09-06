import React from "react";
import "./Rating.css";
import PropTypes from "prop-types";

function Rating({ stars, onChange }) {
  const starIds = [1, 2, 3, 4, 5];

  return (
    <div>
      {starIds.map(id => {
        const active = id <= stars;
        return (
          <span
            className={"star" + (active ? " active" : "")}
            key={id}
            onClick={() => {
              if (onChange) {
                onChange(id);
              }
            }}
          >
            {active ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
}

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  onChange: PropTypes.func
};

export default Rating;

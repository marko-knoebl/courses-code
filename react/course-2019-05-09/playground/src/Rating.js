import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./Rating.css";

class Rating extends Component {

  render() {
    const starIds = [1, 2, 3, 4, 5];

    const starData = starIds.map(starId => {
      return {
        id: starId,
        // compare starId with this.props.stars
        active: this.props.stars >= starId
      };
    });

    // starData = [{id: 1, active: true}, {id: 2, active: false}]

    return (
      <div>
        {starData.map(star => (
          <span
            className={"star" + (star.active ? " active" : "")}
            onClick={() => {
              this.props.onStarsChange(star.id);
            }}
          >
            {/* className={star.active ? "star active" : "star"}> */}
            {star.active ? "★" : "☆"}
          </span>
        ))}
      </div>
    );
  }
}

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  onStarsChange: PropTypes.func,
};

export default Rating;

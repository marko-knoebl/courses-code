import React from "react";
import "./Rating.css";

class Rating extends React.Component {
  /*
    props:
      stars: Number
      interactive: boolean
    events:
      onStarsChange: function(Number)
   */
  render() {
    let starData = [];
    for (let i = 1; i <= 5; i++) {
      starData.push({ id: i, active: i <= this.props.stars });
    }

    return (
      <div className="rating">
        {starData.map(star => (
          <span
            style={{ color: star.active ? "red" : "grey" }}
            onClick={clickEvent => {
              if (this.props.interactive) {
                this.props.onStarsChange(star.id);
              }
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  }
}

export default Rating;

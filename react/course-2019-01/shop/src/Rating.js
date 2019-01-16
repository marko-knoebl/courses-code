import React from "react";

class Rating extends React.PureComponent {
  /*
    props:
      stars: Number
      interactive: boolean
    events:
      onStarsChange: function(Number)
   */
  render() {
    let starData = [];
    for (let i = 0; i <= 4; i++) {
      starData.push({ id: i+1, active: i+1 <= this.props.stars });
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
            key={star.id.toString()}
          >
            ☆
          </span>
        ))}
      </div>
    );
  }
}

export default Rating;

import React, { Component } from 'react';
import './Rating.css';

class Rating extends Component {
  /*
    props:
      stars: number
    events:
      onStarsChange: function(number)
   */
  render() {
    let starData = [];
    for (let i = 0; i <= 4; i++) {
      starData.push({ id: i, active: i < this.props.stars });
    }

    return (
      <div className="rating">
        {starData.map(star => (
          <span
            key={star.id.toString()}
            onClick={() => {
              this.props.onStarsChange(star.id + 1);
            }}
          >
            {star.active ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  }
}

export default Rating;

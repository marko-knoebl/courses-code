import React, { Component } from 'react';
import './Rating.css';

export default class Rating extends Component {
  /*
    props:
      stars: number
    events:
      onStarsChange: function(number)
  */
  render() {
    const starData = [];
    for (let i = 1; i <= 5; i++) {
      starData.push({
        id: i,
        active: i <= this.props.stars
      });
    }
    return (
      <div>
        {starData.map(star => (
          <span
            key={star.id}
            className={star.active ? 'star-active' : 'star-inactive'}
            onClick={() => {this.props.onStarsChange(star.id)}}
          >
            {star.active ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  }
}

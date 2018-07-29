import React, { PureComponent } from 'react';

import './Rating.css';

const emptyStar = '✧';
const fullStar = '✦';

class Rating extends PureComponent {
  render() {
    const starData = [];
    for (let i = 0; i < 5; i++) {
      starData.push({ id: i, active: i < this.props.stars });
    }

    return (
      <div className="rating">
        {starData.map(star => (
          <span
            key={star.id.toString()}
            onClick={this.createClickHandler(star.id)}>
            {star.active ? fullStar : emptyStar}
          </span>
        ))}
      </div>
    );
  }

  createClickHandler(stars) {
    const clickHandler = () => {
      this.props.onRatingChange(stars);
    };
    return clickHandler;
  }
}

export default Rating;

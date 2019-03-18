import React, { Component } from 'react';

import './Rating.css';

class Rating extends Component {
  // props:
  //   stars: number
  // events:
  //   onStarsChange: (stars: number) => void

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.stars !== nextProps.stars;
  }

  render() {
    const starIndexes = [1, 2, 3, 4, 5];

    return (
      <div>
        {starIndexes.map(index =>
          this.props.stars < index ? (
            <span
              className="star"
              key={index}
              onClick={() => {
                this.props.onStarsChange(index);
              }}
            >
              ☆
            </span>
          ) : (
            <span
              className="star active"
              key={index}
              onClick={() => {
                this.props.onStarsChange(index);
              }}
            >
              ★
            </span>
          )
        )}
      </div>
    );
  }
}

export default Rating;

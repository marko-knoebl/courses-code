import React, { PureComponent } from 'react';

class Rating extends PureComponent {
  render() {
    let starData = [];
    for (let i = 1; i <= 5; i++) {
      starData.push({ id: i, active: i <= this.props.stars });
    }

    return (
      <div style={{ fontSize: 35, color: 'gold' }}>
        {starData.map(star => (
          <span
            onClick={() => {
              this.props.onRatingChange(star.id);
            }}
          >
            {star.active ? '\u2605' : '\u2606'}
          </span>
        ))}
      </div>
    );
  }
}

export default Rating;

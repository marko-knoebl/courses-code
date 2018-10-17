import React, { PureComponent } from 'react';

class Rating extends PureComponent {
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
        {starData.map(data => (
          <span
            key={data.id.toString()}
            className="star"
            onClick={() => {
              this.props.onStarsChange(data.id);
            }}
          >
            {data.active ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  }
}

export default Rating;

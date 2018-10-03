import React, { PureComponent } from 'react';

class Rating extends PureComponent {
  render() {
    return (
      <div>
        {[1, 2, 3, 4, 5].map(index => (
          <span
            onClick={() => {
              this.props.ratingChange(this.props.index, index);
            }}
          >
            {this.props.stars >= index ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  }
}

export default Rating;

import React, { PureComponent } from 'react';

class PlayingCard extends PureComponent {
  render() {
    return (
      <div
        style={{
          border: '2px solid black',
          borderRadius: 5,
          height: 200,
          width: 100,
          color: this.props.color
        }}
      >
        {this.props.symbol}
      </div>
    );
  }
}

export default PlayingCard;

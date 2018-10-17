import React, { PureComponent } from 'react';

class Diashow extends PureComponent {
  constructor() {
    super();
    this.state = {
      imgId: 0
    };
  }

  prevImg = () => {
    if (this.state.imgId !== 0) {
      this.setState({ imgId: this.state.imgId - 1 });
    }
  };

  nextImg = () => {
    if (this.state.imgId !== this.props.numPics - 1) {
      this.setState({ imgId: this.state.imgId + 1 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.prevImg}>&lt;</button>
        <img
          src={`https://picsum.photos/200/200?image=${this.state.imgId}`}
          alt="abc"
        />
        <button onClick={this.nextImg}>></button>
      </div>
    );
  }
}

export default Diashow;

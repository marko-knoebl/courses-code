import React, { PureComponent } from 'react';

class Mathador extends PureComponent {
  render() {
    return (
      <div>
        {this.props.mathadorNumber}
        <button onClick={this.handleTimes3}>*3</button>
        <button onClick={this.handleMinus7}>-7</button>
      </div>
    );
  }

  handleTimes3 = () => {
    this.props.onTimes3();
  };

  handleMinus7 = () => {
    this.props.onMinus7();
  };
}

export default Mathador;

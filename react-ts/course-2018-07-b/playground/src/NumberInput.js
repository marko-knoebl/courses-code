import React, { PureComponent } from 'react';

class NumberInput extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={this.handleDecrementClick}>-</button>
        {this.props.value}
        <button onClick={this.handleIncrementClick}>+</button>
      </div>
    );
  }

  handleIncrementClick = () => {
    this.props.onChange({
      value: this.props.value + 1,
      target: { value: this.props.value + 1 },
    });
  };

  handleDecrementClick = () => {
    this.props.onChange({
      value: this.props.value - 1,
      target: { value: this.props.value - 1 },
    });
  };
}

export default NumberInput;

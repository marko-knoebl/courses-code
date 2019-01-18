import React, { Component } from 'react';

class ToggleButton extends Component {
  /*
    props:
      on: boolean
    events:
      onToggle: function
   */
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.on ? 'on' : 'off'}
      </button>
    );
  }

  handleClick = () => {
    // löse das onToggle-event aus
    this.props.onToggle();
  };
}

export default ToggleButton;

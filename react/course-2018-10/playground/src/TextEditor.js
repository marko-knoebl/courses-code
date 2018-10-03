import React, { Component } from 'react';

class TextEditor extends Component {
  constructor() {
    super();
    this.state = {
      newText: ''
    };
  }

  componentDidMount() {
    this.setState({ newText: this.props.text });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.newText}
          onChange={event => this.setState({ newText: event.target.value })}
        />
        <button
          onClick={() => {
            this.props.onSave(this.state.newText);
          }}
        >
          save
        </button>
        <button onClick={this.props.onClose}>close</button>
      </div>
    );
  }

  handleSave = newText => {
    this.setState({ text: newText });
  };
}

export default TextEditor;

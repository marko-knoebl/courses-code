import React, { PureComponent } from 'react';

import TextEditor from './TextEditor';

class EditableText extends PureComponent {
  constructor() {
    super();
    this.state = {
      text: 'editable text',
      editEnabled: false
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.text}</div>
        <button
          onClick={() => {
            this.setState({ editEnabled: true });
          }}
        >
          Edit
        </button>
        {this.state.editEnabled && (
          <TextEditor
            text={this.state.text}
            onSave={this.handleSave}
            onClose={() => {
              this.setState({ editEnabled: false });
            }}
          />
        )}
      </div>
    );
  }

  handleSave = newText => {
    this.setState({ text: newText });
  };
}

export default EditableText;

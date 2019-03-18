import React, { PureComponent } from 'react';

class DocumentTitle extends PureComponent {
  componentDidMount() {
    document.title = this.props.children;
  }

  componentDidUpdate(oldProps) {
    alert();
    if (oldProps.children !== this.props.children) {
      document.title = this.props.children;
    }
  }

  render() {
    return null;
  }
}

export default DocumentTitle;

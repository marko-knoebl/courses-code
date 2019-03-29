import React, {Component} from 'react';

class DocumentTitle extends Component {

  componentDidMount() {
    document.title = this.props.children;
  }

  componentDidUpdate() {
    document.title = this.props.children;
  }

  render() {
    return null;
  }
}

export default DocumentTitle;
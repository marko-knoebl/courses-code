import React, {Component} from "react";

class DocumentTitle extends Component {
  render() {
    return null;
  }

  componentDidMount() {
    // wird aufgerufen, nachdem die Komponente eingebunden wurde
    document.title = this.props.children;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.children !== this.props.children) {
      document.title = this.props.children;
    }
  }
}

export default DocumentTitle;

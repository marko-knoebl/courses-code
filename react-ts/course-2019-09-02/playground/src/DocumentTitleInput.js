import React, {Component} from "react";

class DocumentTitleInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.initialTitle
    }
  }

  render() {
    return <input
      value={this.state.title}
      onChange={(event) => {
        this.setState({
          title: event.target.value
        });
      }}
    />;
  }

  componentDidMount() {
    // wird aufgerufen, nachdem die Komponente eingebunden wurde
    document.title = this.state.title;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.title !== this.state.title) {
      document.title = this.state.title;
    }
  }
}

export default DocumentTitleInput;

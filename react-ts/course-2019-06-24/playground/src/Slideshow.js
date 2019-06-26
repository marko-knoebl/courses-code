import React, {Component} from 'react';

class Slideshow extends Component {

  constructor(props) {
    // Konstruktor der Elternklasse aufrufen
    super(props);
    // initialisieren des states
    this.state = {
      imgId: 10
    };
  }

  render() {
    return <div>
      <h2>Slideshow</h2>
      <button onClick={() => {
        this.setState({imgId: this.state.imgId - 1});
      }}>prev</button>
      <img src={"https://picsum.photos/200?image=" + this.state.imgId} alt="Slideshow"/>
      <button onClick={() => {
        this.setState({imgId: this.state.imgId + 1});
      }}>next</button>
    </div>;
  }
}

export default Slideshow;

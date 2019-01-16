import React from "react";

class Mathador extends React.Component {
  render() {
    return (
      <div>
        {this.props.number}
        <button onClick={this.props.times3}>* 3</button>
        <button onClick={this.props.minus7}>- 7</button>
      </div>
    );
  }
}

export default Mathador;

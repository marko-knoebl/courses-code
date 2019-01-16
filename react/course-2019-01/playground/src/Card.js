import React from "react";

class Card extends React.Component {
    /*
      props:
        value: 2, 3, ..., K, A
        color: b / r
     */
  render() {
    return (
      <div
        style={{
          color: this.props.color === "r" ? "red" : "black",
          fontSize: 30,
          width: 40,
          border: "2px solid black",
          borderRadius: 4
        }}
      >
        <div>{this.props.value}</div>
        <div style={{textAlign: "right"}}>{this.props.value}</div>
      </div>
    );
  }
}

export default Card;

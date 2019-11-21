import React from "react";

const ToggleButton = props => (
  <button
    onClick={() => {
      props.onToggle(!props.active);
    }}
  >
    {props.active ? "ON" : "OFF"}
  </button>
);

export default ToggleButton;

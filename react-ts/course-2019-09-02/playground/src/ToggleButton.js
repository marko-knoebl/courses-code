import React from "react";

const ToggleButton = ({active, onToggle}) => {
  return (
    <button
      onClick={() => {
        onToggle(!active);
      }}
    >
      {active ? "on" : "off"}
    </button>
  );
};

export default ToggleButton;

import React from "react";

function ToggleButton({ active, onToggle }) {
  return (
    <button
      onClick={() => {
        onToggle(!active);
      }}
    >
      {active ? "ON" : "OFF"}
    </button>
  );
}

export default ToggleButton;

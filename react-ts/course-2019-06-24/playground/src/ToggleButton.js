import React from "react";

const ToggleButton = props => {
  // props:
  //   - status: boolean
  // events:
  //   - onStatusChange: (newStatus: boolean) => void
  return (
    <button
      onClick={() => {
        // event auslösen = Funktion aufrufen
        props.onStatusChange(!props.status);
      }}
    >
      {props.status ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleButton;

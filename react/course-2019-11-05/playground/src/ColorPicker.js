import React, {memo} from "react";

import "./ColorPicker.css";

import PropTypes from "prop-types";

function rgbStringFromValues(values) {
  return `rgb(${values[0]} ,${values[1]} ,${values[2]})`;
}

/**
 * Color Picker component
 *
 * props:
 *   value: [number, number, number]
 * events:
 *   onChange: ([number, number, number]) => void
 */
function ColorPicker(props) {
  return (
    <div>
      <div className="inputs">
        <input
          value={props.value[0] === null ? "" : props.value[0]}
          onChange={event =>
            props.onChange([
              event.target.value === "" ? null : Number(event.target.value),
              props.value[1],
              props.value[2]
            ])
          }
          type="number"
        />
        <input
          value={props.value[1] === null ? "" : props.value[1]}
          type="number"
          onChange={event =>
            props.onChange([
              props.value[0],
              event.target.value === "" ? null : Number(event.target.value),
              props.value[2]
            ])
          }
        />
        <input
          value={props.value[2] === null ? "" : props.value[2]}
          type="number"
          onChange={event =>
            props.onChange([
              props.value[0],
              props.value[1],
              event.target.value === "" ? null : Number(event.target.value)
            ])
          }
        />
      </div>
      <div>
        <input
          value={Math.round(
            ((props.value[0] + props.value[1] + props.value[2]) / 3) *
              (100 / 255)
          )}
          onChange={event => {
            const oldLightness =
              ((props.value[0] + props.value[1] + props.value[2]) / 3) *
              (100 / 255);
            const newLightness = Number(event.target.value) || 0;
            const factor = newLightness / oldLightness;
            props.onChange([
              Math.round(props.value[0] * factor),
              Math.round(props.value[1] * factor),
              Math.round(props.value[2] * factor)
            ]);
          }}
        />
      </div>
      <div
        className="color-preview"
        style={{ backgroundColor: rgbStringFromValues(props.value) }}
      />
      <div>
        default colors:
        <button onClick={() => props.onChange([255, 0, 0])}>red</button>
        <button onClick={() => props.onChange([0, 0, 255])}>blue</button>
      </div>
    </div>
  );
}

ColorPicker.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func
};

export default memo(ColorPicker);

import React from "react";

export default (props) => {
  return (
    <div>
      <div>
        {props.devices.map((dev, i) => {
          return (
            <button
              style={{ backgroundColor: dev.deviceСondition ? "green" : "red" }}
              onClick={() => {
                props.change_State_Device(props.index, i);
              }}
            >
              <h4>{dev.deviceName}</h4>
            </button>
          );
        })}
      </div>
      <br />
      &emsp;
    </div>
  );
};

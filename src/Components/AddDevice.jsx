import React, { useState } from "react";

export default function AddDevice(props) {
  const [device, setDevice] = useState("");

  const checkDevices = () => {
    props.switchComponent();

    if (props.devs.length < 5) {

      if (device === "Sound system") {

          const stereo = (element) => element.deviceName === "Sound system";

          
          if (props.devs.some(stereo)) {
            alert("You already have a sound system in this room");
          }
          else {
            props.getDevices(device);
          }
      }

      if (props.type !== "Bathroom") {
        if (device === "Boiler") {
          alert("You can add the Boiler only in the Bathroom");
        } else if (device !== "Sound system") {
          props.getDevices(device);
        }
      } else if (device !== "Sound system") {
        props.getDevices(device);
      }
    } else {
      alert("Maximum 5 devices");
    }
  };

  const handleChange = (e) => {
    setDevice(e.target.value);
  };

  return (
    <div>
      <br />

      <br />
      <select
        id="devices"
        defaultValue="Select device"
        className="form-control"
        onChange={handleChange}
      >
        <option disabled>Select device</option>
        <option>AC</option>
        <option>Lamp</option>
        <option>Sound system</option>
        <option>Boiler</option>
      </select>
      <br />
      <button
        onClick={checkDevices}
        type="button"
        className="btn btn-outline-success"
      >
        Add
      </button>
      <br />
    </div>
  );
}

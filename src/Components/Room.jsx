import React, { useState } from "react";
import AddDevice from "./AddDevice";
import { Link } from "react-router-dom";
import Device from "./Device";
export default function Room(props) {

  const [ isOpen, setIsOpen ] = useState(false);
  
  const styles = {
    backgroundColor: props.room.color,
  };

  const getDevices = (devs) => {
    props.addDevice(devs, props.index);
  };


  const switchComponent = () => {
    setIsOpen(!isOpen);
  };

  const viewComponent = () => {
    
    if (isOpen === true) {
      return (
        <AddDevice
          getDevices={getDevices}
          switchComponent={switchComponent}
          devs={props.devs}
          type={props.type}
          deviceIndex={props.deviceIndex}
          index={props.index}
        
        />
      );
    }
    else {
      return;
    }
  };

  return (
    <div>
      <div style={styles}>
        <h6>&nbsp;</h6>
        <h4>Type of the room: {props.room.type}</h4>
        <h6>Name of the room: {props.room.name}</h6>&emsp;
      </div>
      <br />
      <div className="card border-success mb-3" style={{ maxWidth: "40rem" }}>
        <div className="card-header">
          <h4 className="text-success">Devices in this room</h4>
        </div>
        <div className="card-body">
          <div style={{ display: "flex", width: 600 }}>
            <div>
              <Device
                devices={props.devs}
                index={props.index}
                change_State_Device={props.change_State_Device}
                room={props.room}
              />
            </div>
          </div>
          <br />
          <button
            onClick={switchComponent}
            id="add-button"
            type="button"
            className="btn btn-outline-success"
          >
            Add device
          </button>
        </div>
      </div>

      <div>{viewComponent()}</div>

      <br />
      <Link to="/">
        <a>Back to HomePage</a>{" "}
      </Link>
    </div>
  );
}

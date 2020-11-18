import React, { useState } from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const [rooms, setRooms] = useState({
    type: "",
    name: "",
    color: "",
  });

  const handleChange = (event) => {
    if (event.target.id === "rooms") {
      if (
        event.target.value === "Kitchen" ||
        "Bedroom" ||
        "Bathroom" ||
        "Toilet"
      ) {
        setRooms({
          type: event.target.value,
          name: rooms.name,
          color: rooms.color,
        });
      }
    } else if (event.target.value === "Select room") {
      setRooms("");
    }
    if (event.target.id === "name") {
      if (event.target.value.length >= 1) {
        setRooms({
          type: rooms.type,
          name: event.target.value,
          color: rooms.color,
        });
      } else if (event.target.value.length === 0) {
        setRooms("");
      }
    }
    if (event.target.id === "color" || event.target.id === "color2") {
      setRooms({
        type: rooms.type,
        name: rooms.name,
        color: event.target.value,
      });
    }
  };

  const use_Button = () => {
    switch (rooms.type) {
      case "Kitchen":
        if (rooms.name.length >= 1) {
          props.getParams(rooms.type, rooms.name, rooms.color);
          break;
        }
      case "Bedroom":
        if (rooms.name.length >= 1) {
          props.getParams(rooms.type, rooms.name, rooms.color);
          break;
        }
      case "Bathroom":
        if (rooms.name.length >= 1) {
          props.getParams(rooms.type, rooms.name, rooms.color);
          break;
        }
      case "Toilet":
        if (rooms.name.length >= 1) {
          props.getParams(rooms.type, rooms.name, rooms.color);
          break;
        }
      default:
        alert("ERROR");
    }
  };

  return (
    <React.Fragment>
      <div style={{ width: 220, textAlign: "center" }}>
        <div
          style={{
            marginLeft: 130,
            marginRight: "auto",
            width: 300,
            height: 330,
            textAlign: "center",
          }}
        >
          <select
            id="rooms"
            onChange={handleChange}
            defaultValue="Select room"
            className="form-control"
          >
            <option disabled>Select room</option>
            <option>Kitchen</option>
            <option>Bedroom</option>
            <option>Bathroom</option>
            <option>Toilet</option>
          </select>
          <br />
          <input
            id="name"
            className="form-control"
            onChange={handleChange}
            type="text"
            maxLength="5"
            placeholder="Name"
          />
          <br />
          <input
            id="color"
            className="form-control"
            type="text"
            placeholder="Color"
            onChange={handleChange}
          />{" "}
          <br />
          <h5 class="text-info">Or select color here:</h5>
          <input
            onChange={handleChange}
            id="color2"
            style={{ width: 300, height: 30 }}
            type="color"
          ></input>
          <br />
          <br /> <br />
          <Link to="/">
            <button className="btn btn-primary btn-lg" onClick={use_Button}>
              Create
            </button>
          </Link>
          <br />
          <br />
          <Link to="/">
            <p>Back to HomePage</p>
          </Link>
        </div>
        <br /> <br />{" "}
      </div>
      <br />
    </React.Fragment>
  );
};

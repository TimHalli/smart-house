import React, { useState } from "react";
import "./App.css";
import AddNewRoom from "./Components/AddNewRoom";
import Title from "./Components/Title";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewRooms from "./Components/ViewRooms";
import AddButton from "./Components/AddButton";
import Room from "./Components/Room";

export default function App() {

  const [ rooms, setRooms ] = useState([]);
  const [ deviceIndex, setDeviceIndex] = useState(0)
  
  const styles = {
    display: "flex",
    marginTop: "100px",
    textAlign: "center",
    justifyContent: "space-between",
    margin: "0 auto",
    maxWidth: "600px",
    padding: "20px",
    width: 600,
    position: "relative",
    maxWidth: "40rem",
  };

  const getParams = (type, name, color) => {
    //= props from <AddNewRoom/>
    setRooms([
      ...rooms,
      {
        type,
        name,
        color,
        devices: [],
      },
    ]);
  };

  const addDevice = (deviceName, indexOfRoom) => {
    
    rooms[ indexOfRoom ].devices.push({ deviceName, deviceСondition: false });
  };

  const change_State_Device = (roomIndex, indexDevice) => {

    rooms[ roomIndex ].devices[ indexDevice ].deviceСondition =
      !rooms[ roomIndex ].devices[ indexDevice ].deviceСondition 
    setDeviceIndex(indexDevice);
    setRooms([...rooms]);
  };

  return (
    <div style={styles} className="card border-primary mb-3">
      <div>
        <Title />
        <Router>
          <Route
            exact
            path={`/`}
            component={() => <ViewRooms rooms={rooms} />}
          />

          <Switch>
            {rooms.map((room, i) => {
              return (
                <Route
                  exact
                  path={`/${room.name}`}
                  component={() => (
                    <Room
                      index={i}
                      devs={room.devices}
                      room={room}
                      addDevice={addDevice}
                      type={room.type}
                      change_State_Device={change_State_Device}
                      deviceIndex={deviceIndex}
                      
                    />
                  )}
                />
              );
            })}

            <Route
              exact
              path="/addroom"
              component={() => {
                return (
                  <AddNewRoom
                    getParams={getParams}
                  />
                );
              }}
            />
            <Route
              exact
              path="/"
              component={() => {
                return <AddButton />;
              }}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

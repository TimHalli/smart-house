import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  
  return (
    <div>
      <div style={{ maxWidth: "40rem" }}>
        <div style={{ display: "flex", width: 600 }} className="card-body">
          {props.rooms.map((item) => {
            return (
              <div>
                <Link to={`/${item.name}`}>
                  <button
                    style={{
                      display: "inline-block",
                      backgroundColor: item.color,
                      padding: "5px",
                    }}
                    className="alert alert-dismissible alert-secondary"
                  >
                    <h4>{item.type}</h4>
                    <strong>
                      <h1>{item.name}</h1>
                    </strong>
                  </button>
                </Link>
                &nbsp; &nbsp;
              </div>
            );
          })}{" "}
        </div>
      </div>
      &nbsp;&nbsp;
    </div>
  );
};

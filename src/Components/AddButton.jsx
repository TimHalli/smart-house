import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div>
      <Link to="/addroom">
        <button
          style={{ width: 100, height: 100, textAlign: "center" }}
          className="btn btn-primary btn-lg"
        >
          <strong>
            <span style={{ fontSize: 50 }}>+</span>
          </strong>
        </button>
        <br />
        <br />
      </Link>
    </div>
  );
};

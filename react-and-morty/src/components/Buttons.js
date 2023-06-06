import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <div className="btn btn-success text-white mx-4">
        <Link className="text-decoration-none text-white" to="/characters">
          Characters
        </Link>
      </div>
      <div className="btn btn-danger text-white mx-4">
        <Link className="text-decoration-none text-white" to="/locations">
          Locations
        </Link>
      </div>
    </div>
  );
};

export default Buttons;

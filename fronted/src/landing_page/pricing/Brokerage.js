import React from "react";
import { Link } from "react-router-dom";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <div className="col-8 p-4">
          <Link to="/brokerage-calculator" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </Link>
        </div>

        <div className="col-4 p-4">
          <Link to="/brokerage" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

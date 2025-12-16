import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center">The Zerodha Universe</h1>
        <p className="text-center">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <img src="/media/smallcaseLogo.png"></img>
          <p className="text-small text-muted">Thematic investment plan</p>
        </div>
        <div className="col-4 p-3">
          <img src="/media/zerodhaFundhouse.png" style={{ width: "30%" }}></img>
          <p className="text-small text-muted">Thematic investment plan</p>
        </div>
        <div className="col-4 p-3">
          <img src="/media/sensibullLogo.svg"></img>
          <p className="text-small text-muted">Thematic investment plan</p>
        </div>
        <div className="col-4 p-3">
          <img src="/media/streakLogo.png" style={{ width: "30%" }}></img>
          <p className="text-small text-muted">Thematic investment plan</p>
        </div>
        <div className="col-4 p-3">
          <img src="/media/dittoLogo.png" style={{ width: "30%" }}></img>
          <p className="text-small text-muted">Thematic investment plan</p>
        </div>
        <div className="col-4 p-3">
          <img src="/media/smallcaseLogo.png"></img>
          <p className="text-small text-muted">Thematic investment plan</p>
        </div>
        <Link to="/signup" style={{ width: "100%", textAlign: "center" }}>
          <button
            className="p-3 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto", display: "block" }}
          >
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;

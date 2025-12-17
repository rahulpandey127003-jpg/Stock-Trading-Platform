import React from "react";
import { Link } from "react-router-dom";
import { MEDIA_URL } from "../config"; // adjust path if needed

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <img src={`${MEDIA_URL}/smallcaseLogo.png`} alt="Smallcase" />
          <p className="text-small text-muted">Thematic investment plans</p>
        </div>

        <div className="col-4 p-3">
          <img
            src={`${MEDIA_URL}/zerodhaFundhouse.png`}
            alt="Zerodha Fund House"
            style={{ width: "30%" }}
          />
          <p className="text-small text-muted">Mutual fund investments</p>
        </div>

        <div className="col-4 p-3">
          <img src={`${MEDIA_URL}/sensibullLogo.svg`} alt="Sensibull" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>

        <div className="col-4 p-3">
          <img
            src={`${MEDIA_URL}/streakLogo.png`}
            alt="Streak"
            style={{ width: "30%" }}
          />
          <p className="text-small text-muted">Algo & strategy builder</p>
        </div>

        <div className="col-4 p-3">
          <img
            src={`${MEDIA_URL}/dittoLogo.png`}
            alt="Ditto"
            style={{ width: "30%" }}
          />
          <p className="text-small text-muted">Insurance advisory</p>
        </div>

        <div className="col-4 p-3">
          <img src={`${MEDIA_URL}/smallcaseLogo.png`} alt="Smallcase" />
          <p className="text-small text-muted">Thematic portfolios</p>
        </div>

        <Link to="/signup" className="w-100 text-center">
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

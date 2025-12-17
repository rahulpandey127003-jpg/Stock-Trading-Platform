import React from "react";
import { MEDIA_URL } from "../config"; // adjust path if needed

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/education.svg"
            alt="Market education"
            style={{ width: "90%" }}
          />
        </div>

        <div className="col-6 mb-5">
          <div className="row">
            <h1 className="mb-3">Free and open market education</h1>

            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>

            <a
              href="https://zerodha.com/varsity/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="mb-5 d-inline-block"
            >
              Varsity{" "}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </a>

            <p className="mt-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>

            <a
              href="https://tradingqna.com/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              TradingQ&amp;A{" "}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

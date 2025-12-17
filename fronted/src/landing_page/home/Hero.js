import React from "react";
import { Link } from "react-router-dom";
import { MEDIA_URL } from "../config"; // adjust path if needed

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/homeHero.png"
          alt="Investing platform hero"
          className="img-fluid"
        />

        <h1 className="mt-5">Invest in everything</h1>

        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <Link
          to="/signup"
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="text-muted mt-2">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha Products{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;

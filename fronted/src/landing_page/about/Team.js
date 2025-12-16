import React from "react";

function Team() {
  return (
    <div className="container text-muted">
      <div className="row p-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row p-5">
        <div className="col-6 p-5 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/media/profilepict.png`}
            alt="Profile"
            style={{ width: "60%", borderRadius: "100%" }}
          />

          <h4 className="mt-3">NITIN PANDEY</h4>
          <h6>Developer</h6>
        </div>

        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
            he faced during his decade-long stint as a trader.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>Homepage</a> /{" "}
            <a href="#" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

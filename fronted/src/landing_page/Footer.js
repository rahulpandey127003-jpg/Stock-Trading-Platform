import React from "react";
import { Link } from "react-router-dom";
import { MEDIA_URL } from "../config"; // adjust path if needed

function Footer() {
  return (
    <footer style={{ backgroundColor: "#DCDCDC" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5 mb-5">
          <div className="col">
            <img
              src={`${MEDIA_URL}/logo.svg`}
              alt="Zerodha Logo"
              style={{ width: "70%" }}
            />
            <p className="mt-3">
              © 2010 – 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Account</p>
            <Link to="/signup" className="text-muted text-decoration-none d-block">
              Open demat account
            </Link>
            <span className="text-muted d-block">Minor demat account</span>
            <span className="text-muted d-block">NRI demat account</span>
            <span className="text-muted d-block">Commodity</span>
            <span className="text-muted d-block">Dematerialisation</span>
            <span className="text-muted d-block">Fund transfer</span>
            <span className="text-muted d-block">MTF</span>
            <span className="text-muted d-block">Referral program</span>
          </div>

          <div className="col">
            <p>Company</p>
            <Link to="/about" className="text-muted text-decoration-none d-block">
              About
            </Link>
            <span className="text-muted d-block">Philosophy</span>
            <span className="text-muted d-block">Press & media</span>
            <span className="text-muted d-block">Careers</span>
            <span className="text-muted d-block">Zerodha Cares (CSR)</span>
            <a
              href="https://zerodha.tech"
              target="_blank"
              rel="noreferrer"
              className="text-muted text-decoration-none d-block"
            >
              Zerodha.tech
            </a>
            <span className="text-muted d-block">Open source</span>
          </div>

          <div className="col">
            <p>Quick links</p>
            <span className="text-muted d-block">Upcoming IPOs</span>
            <span className="text-muted d-block">Market holidays</span>
            <span className="text-muted d-block">Economic calendar</span>
            <span className="text-muted d-block">Calculators</span>
            <span className="text-muted d-block">Markets</span>
            <span className="text-muted d-block">Sectors</span>
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.:
            INZ000031633. Registered Address: Bengaluru, Karnataka, India.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all
            related documents carefully before investing.
          </p>

          <div className="text-center p-3">
            <span className="text-muted p-3">NSE</span>
            <span className="text-muted p-3">BSE</span>
            <span className="text-muted p-3">MCX</span>
            <span className="text-muted p-3">Terms & conditions</span>
            <span className="text-muted p-3">Privacy policy</span>
            <span className="text-muted p-3">Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

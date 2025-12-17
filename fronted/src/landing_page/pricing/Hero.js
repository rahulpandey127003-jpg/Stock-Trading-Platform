import React from "react";

function Hero() {
  return (
    <div className="container text-center">
      <div className="row border-bottom mt-5 mb-5 p-5">
        <h1>Charges</h1>
        <h3 className="text-muted p-3">List of all charges and taxes</h3>
        <div className="col-4 p-3">
          <img src="/media/pricing0.svg"></img>
          <h1 className="fs-4">Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="https://stocktrade-demo.xyz/media/intradayTrades.svg"></img>
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="https://stocktrade-demo.xyz/media/pricing0.svg"></img>
          <h1 className="fs-4">Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

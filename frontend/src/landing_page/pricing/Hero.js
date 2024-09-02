import React from "react";

function Hero() {
  return (
    <div className="container text-center">
      <div className="row border-bottom">
        <div className="col" style={{ marginBottom: "8%", marginTop: "8%" }}>
          <h1 className="text-muted" style={{ fontSize: "50px" }}>
            Pricing
          </h1>
          <p style={{ fontSize: "22px" }} className="text-muted">
            Free equity investments and flat ₹20 intraday and F&O trades
          </p>
        </div>
      </div>
      <div
        className="row border-bottom"
        style={{ marginTop: "8%", paddingBottom: "8%" }}
      >
        <div className="col-4 m-0">
          <img
            style={{ width: "250px" }}
            src="media/images/pricing-eq.svg"
            alt="pricing"
          />
          <h2 className="text-muted">Free equity delivery</h2>
          <p className="text-muted mt-4" style={{ fontSize: "16px" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 m-0">
          <img
            style={{ width: "250px" }}
            src="media/images/other-trades.svg"
            alt="pricing"
          />
          <h2 className="text-muted">Intraday and F&O trades</h2>
          <p className="text-muted mt-4" style={{ fontSize: "16px" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 m-0">
          <img
            style={{ width: "250px" }}
            src="media/images/pricing-eq.svg"
            alt="pricing"
          />
          <h1 className="text-muted">Free direct MF</h1>
          <p className="text-muted mt-4" style={{ fontSize: "16px" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

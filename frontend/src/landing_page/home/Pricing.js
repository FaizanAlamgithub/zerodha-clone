import React from "react";

function Pricing() {
  return (
    <div
      className="container"
      style={{ marginTop: "120px", marginBottom: "120px" }}
    >
      <div className="row">
        <div className="col-4">
          <h1 className="fs-2 mb-4 text-muted">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ fontWeight: "500", textDecoration: "none" }}>
            See pricing{" "}
            <i
              style={{ fontSize: "12px" }}
              class="fa-solid fa-arrow-right-long"
            ></i>
          </a>
        </div>
        <div
          className="col-2 m-0"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="col-6">
            <img
              style={{ width: "120px" }}
              src="media/images/pricing-eq.svg"
              alt="pricing"
            />
          </div>
          <p className="text-muted" style={{ fontSize: "11px" }}>
            Free account opening
          </p>
        </div>
        <div
          className="col-3 m-0"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="col-6">
            <img
              style={{ width: "120px" }}
              src="media/images/pricing-eq.svg"
              alt="pricing"
            />
          </div>
          <p className="text-muted" style={{ fontSize: "11px" }}>
            Free equity delivery and direct mutual funds
          </p>
        </div>
        <div
          className="col-3 m-0"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="col-6">
            <img
              style={{ width: "120px" }}
              src="media/images/other-trades.svg"
              alt="pricing"
            />
          </div>
          <p className="text-muted" style={{ fontSize: "11px" }}>
            Free equity delivery and direct mutual funds
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

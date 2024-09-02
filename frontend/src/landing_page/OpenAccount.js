import React from "react";

function OpenAccount() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <div className="col">
          <h1 className="mt-5 mb-4 text-muted fs-2">Open a Zerodha account</h1>
          <p className="text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="p-2 btn btn-primary fs-5 mt-5"
            style={{
              width: "20%",
              margin: "0 auto",
              backgroundColor: "#387ed1",
              color: "white",
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;

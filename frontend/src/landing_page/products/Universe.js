import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col p-5 text-center">
          <p
            className="text-muted"
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "10%",
            }}
          >
            Want to know more about our technology stack? Check out the{" "}
            <Link style={{ textDecoration: "none" }} to="/">
              Zerodha.tech
            </Link>{" "}
            blog.
          </p>
          <h2 className="mt-5 text-muted">The Zerodha Universe</h2>
          <p
            className="mt-4 text-muted"
            style={{ fontSize: "18px", fontWeight: "400" }}
          >
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="row p-5">
            <div className="col-4 p-4 text-center">
              <img
                style={{ width: "200px" }}
                src="media/images/zerodhafundhouse.png"
                alt="zerodhafundhouse"
              />
              <p className="pt-4  text-muted" style={{ fontSize: "13px" }}>
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
            <div className="col-4 p-4 text-center">
              <img
                style={{ width: "220px", marginTop: "10px" }}
                src="media/images/sensibull.svg"
                alt="zerodhafundhouse"
              />
              <p
                className="pt-4 text-muted"
                style={{ fontSize: "13px", marginTop: "5px" }}
              >
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </div>
            <div className="col-4 p-4 text-center">
              <img
                style={{ width: "140px" }}
                src="media/images/tijori.svg"
                alt="tijori"
              />
              <p className="pt-4 text-muted" style={{ fontSize: "13px" }}>
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
          </div>
          <div className="row px-5">
            <div className="col-4 p-4 text-center">
              <img
                style={{ width: "200px" }}
                src="media/images/streak-logo.png"
                alt="streak-logo"
              />
              <p className="pt-4  text-muted" style={{ fontSize: "13px" }}>
                Systematic trading platform that allows you to create and
                backtest strategies without coding
              </p>
            </div>
            <div className="col-4 p-4 text-center">
              <img
                style={{ width: "220px", marginTop: "10px" }}
                src="media/images/smallcase-logo.png"
                alt="smallcase-logo"
              />
              <p className="pt-4 text-muted" style={{ fontSize: "13px" }}>
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </div>
            <div className="col-4 p-4 text-center">
              <img
                style={{ width: "150px", marginBottom: "10px" }}
                src="media/images/ditto-logo.png"
                alt="ditto-logo"
              />
              <p className="pt-4 text-muted" style={{ fontSize: "13px" }}>
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </div>
          </div>
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

export default Universe;

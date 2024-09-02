import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div style={{ background: "#387ED1" }}>
      <div className="container p-5">
        <div className="row">
          <div className="col-8 ">
            <h4 className="mb-5 text-white">Support Portal</h4>
            <h3 className="mb-5 fs-3 text-white" style={{ fontWeight: "400" }}>
              Search for an answer or browse help topics to create a ticket
            </h3>
            <div className="row mb-5">
              <div
                className="col d-flex"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  style={{
                    width: "90%",
                    height: "250%",
                    marginLeft: "-12%",
                    outline: "none",
                    border: "none",
                  }}
                  type="text"
                  name="search"
                  placeholder="Eg: how do i active F&O, why is my order getting rejected..."
                />
                <i
                  style={{ marginLeft: "-5%", cursor: "pointer" }}
                  class="fa-solid fa-magnifying-glass"
                ></i>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex">
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    marginRight: "12px",
                  }}
                >
                  <Link className="text-white" to="/">
                    Track account opening
                  </Link>
                </p>
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    marginRight: "12px",
                  }}
                >
                  <Link className="text-white" to="/">
                    Track segment activation
                  </Link>
                </p>
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    marginRight: "12px",
                  }}
                >
                  <Link className="text-white" to="/">
                    Intraday margins
                  </Link>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    marginRight: "12px",
                  }}
                >
                  <Link className="text-white" to="/">
                    Kite user manual
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <p
              style={{
                fontSize: "17px",
                fontWeight: "500",
                display: "flex",
                marginRight: "12px",
                justifyContent: "right",
                marginBottom: "40%",
              }}
            >
              <Link className="text-white" to="/">
                Track tickets
              </Link>
            </p>
            <h4 className="fs-4 text-white">Featured</h4>
            <div className="col px-4 pt-2">
              <p
                style={{ fontSize: "17px", fontWeight: "500", color: "white" }}
              >
                1.{" "}
                <Link className="text-white" to="/">
                  Current Buybacks - August 2024
                </Link>
              </p>
              <p
                style={{ fontSize: "17px", fontWeight: "500", color: "white" }}
              >
                2.{" "}
                <Link className="text-white" to="/">
                  Offer for sale (OFS) - August 2024
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

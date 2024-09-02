import React from "react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            style={{ width: "450px" }}
            src="media/images/index-education.svg"
            alt="education"
          />
        </div>
        <div className="col-6">
          <h3 className="mt-5 mb-4">Free and open market education</h3>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <Link to="/" style={{ fontWeight: "500", textDecoration: "none" }}>
            Varsity{" "}
            <i
              style={{ fontSize: "12px" }}
              class="fa-solid fa-arrow-right-long"
            ></i>
          </Link>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <Link to="/" style={{ fontWeight: "500", textDecoration: "none" }}>
            TradingQ&A{" "}
            <i
              style={{ fontSize: "12px" }}
              class="fa-solid fa-arrow-right-long"
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Education;

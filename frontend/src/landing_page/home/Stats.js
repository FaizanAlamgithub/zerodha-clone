import React from "react";

function Stats() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <h1 className="mt-5 fs-2">Trust with confidence</h1>
          <h4 className="mt-5 fs-5">Customer-first always</h4>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h4 className="mt-5 fs-5">No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h4 className="mt-5 fs-5">The Zerodha universe</h4>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4 className="mt-5 fs-5">Do better with money</h4>
          <p className="text-muted">
            With initiatives like{" "}
            <a style={{ textDecoration: "none" }} href="#">
              Nudge
            </a>{" "}
            and{" "}
            <a style={{ textDecoration: "none" }} href="#">
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>
        <div className="col-7">
          <img
            style={{ width: "650px", height: "650px" }}
            src="media/images/Console.png"
            alt="console image"
          />
          <div className="col text-center mt-4">
            <a
              href="#"
              className="mx-4"
              style={{ fontWeight: "500", textDecoration: "none" }}
            >
              Explore Our Products{" "}
              <i
                style={{ fontSize: "12px" }}
                class="fa-solid fa-arrow-right-long"
              ></i>
            </a>
            <a
              href="#"
              className="mx-4"
              style={{ fontWeight: "500", textDecoration: "none" }}
            >
              Explore Our Products{" "}
              <i
                style={{ fontSize: "12px" }}
                class="fa-solid fa-arrow-right-long"
              ></i>
            </a>
          </div>
        </div>
        <div className="col text-center mt-5 ">
          <img src="media/images/press-logos.png" alt="press image" />
        </div>
      </div>
    </div>
  );
}

export default Stats;

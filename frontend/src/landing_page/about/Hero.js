// import React from "react";
// import { Link } from "react-router-dom";

// function Hero() {
//   return (
//     <div className="Container p-5">
//       <div className="row">
//         <div className="col text-center mb-5">
//           <h1
//             style={{
//               paddingRight: "250px",
//               paddingLeft: "250px",
//               marginTop: "50px",
//               marginBottom: "100px",
//             }}
//             className="fs-2 text-muted"
//           >
//             We pioneered the discount broking model in India. Now, we are
//             breaking ground with our technology.
//           </h1>
//           <hr></hr>
//         </div>
//         <div
//           className="row"
//           style={{ paddingRight: "180px", paddingLeft: "180px" }}
//         >
//           <div className="col-6 mt-5">
//             <p
//               className="text-muted"
//               style={{ fontSize: "18px", fontWeight: "400" }}
//             >
//               We kick-started operations on the 15th of August, 2010 with the
//               goal of breaking all barriers that traders and investors face in
//               India in terms of cost, support, and technology. We named the
//               company Zerodha, a combination of Zero and "Rodha", the Sanskrit
//               word for barrier.
//             </p>
//             <p
//               className="text-muted"
//               style={{ fontSize: "18px", fontWeight: "400" }}
//             >
//               Today, our disruptive pricing models and in-house technology have
//               made us the biggest stock broker in India.
//             </p>
//             <p
//               className="text-muted"
//               style={{ fontSize: "18px", fontWeight: "400" }}
//             >
//               Over 1+ Crore clients place millions of orders every day through
//               our powerful ecosystem of investment platforms, contributing over
//               15% of all Indian retail trading volumes.
//             </p>
//           </div>
//           <div className="col-6 mt-5">
//             <p
//               className="text-muted"
//               style={{ fontSize: "18px", fontWeight: "400" }}
//             >
//               In addition, we run a number of popular open online educational
//               and community initiatives to empower retail traders and investors.
//             </p>
//             <p
//               className="text-muted"
//               style={{ fontSize: "18px", fontWeight: "400" }}
//             >
//               <Link to="/" style={{ textDecoration: "none" }}>
//                 Rainmatter
//               </Link>
//               , our fintech fund and incubator, has invested in several fintech
//               startups with the goal of growing the Indian capital markets.
//             </p>
//             <p
//               className="text-muted"
//               style={{ fontSize: "18px", fontWeight: "400" }}
//             >
//               And yet, we are always up to something new every day. Catch up on
//               the latest updates on our{" "}
//               <Link to="/" style={{ textDecoration: "none" }}>
//                 blog
//               </Link>{" "}
//               or see what the media is{" "}
//               <Link to="/" style={{ textDecoration: "none" }}>
//                 saying about us
//               </Link>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"; // Import the updated CSS

function Hero() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col text-center mb-5">
          <h1 className="fs-4 text-muted hero-heading">
            We pioneered the discount broking model in India. Now, we are
            breaking ground with our technology.
          </h1>
          <hr />
        </div>
        <div className="row content-wrapper">
          <div className="col-md-6 col-12 mt-5">
            <p className="text-muted hero-paragraph">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p className="text-muted hero-paragraph">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p className="text-muted hero-paragraph">
              Over 1+ Crore clients place millions of orders every day through
              our powerful ecosystem of investment platforms, contributing over
              15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-md-6 col-12 mt-5">
            <p className="text-muted hero-paragraph">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p className="text-muted hero-paragraph">
              <Link to="/" className="hero-link">
                Rainmatter
              </Link>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p className="text-muted hero-paragraph">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our{" "}
              <Link to="/" className="hero-link">
                blog
              </Link>{" "}
              or see what the media is{" "}
              <Link to="/" className="hero-link">
                saying about us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

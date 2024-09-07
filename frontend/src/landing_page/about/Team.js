// import React from "react";
// import { Link } from "react-router-dom";

// function Team() {
//   return (
//     <div className="container mb-5 mt-5">
//       <div className="row">
//         <div className="col text-center m-5">
//           <h1 className="mt-5 text-muted fs-2">People</h1>
//         </div>
//         <div className="row">
//           <div
//             className="col-6 pt-5 text-center"
//             style={{ paddingLeft: "10%" }}
//           >
//             <img
//               className="rounded-circle"
//               src="media/images/nithin-kamath.jpg"
//               alt="ceo-image"
//               style={{ width: "300px" }}
//             />
//             <h3 className="mt-4 text-muted fs-4">Nithin Kamath</h3>
//             <p className="text-muted">Founder, CEO</p>
//           </div>
//           <div
//             className="col-6"
//             style={{ marginTop: "5%", paddingRight: "10%" }}
//           >
//             <p>
//               Nithin bootstrapped and founded Zerodha in 2010 to overcome the
//               hurdles he faced during his decade long stint as a trader. Today,
//               Zerodha has changed the landscape of the Indian broking industry.
//             </p>
//             <p>
//               He is a member of the SEBI Secondary Market Advisory Committee
//               (SMAC) and the Market Data Advisory Committee (MDAC).
//             </p>
//             <p>Playing basketball is his zen.</p>
//             <p>
//               Connect on{" "}
//               <Link style={{ textDecoration: "none" }} to="/">
//                 Homepage
//               </Link>
//               /
//               <Link style={{ textDecoration: "none" }} to="/">
//                 TradingQnA
//               </Link>
//               /
//               <Link style={{ textDecoration: "none" }} to="/">
//                 Twitter
//               </Link>
//             </p>
//           </div>
//         </div>
//         <div className="row text-center mt-5 ">
//           <div className="col-4 pt-5">
//             <img
//               className="rounded-circle"
//               src="media/images/nikhil.jpg"
//               alt="ceo-image"
//               style={{ width: "230px" }}
//             />
//             <h3 className="mt-4 text-muted fs-5">Nikhil Kamath</h3>
//             <p className="text-muted">Co-founder & CFO</p>
//           </div>
//           <div className="col-4 pt-5">
//             <img
//               className="rounded-circle"
//               src="media/images/kailash.jpg"
//               alt="ceo-image"
//               style={{ width: "230px" }}
//             />
//             <h3 className="mt-4 text-muted fs-5">Dr. Kailash Nadh</h3>
//             <p className="text-muted">CTO</p>
//           </div>
//           <div className="col-4 pt-5">
//             <img
//               className="rounded-circle"
//               src="media/images/venu.jpg"
//               alt="ceo-image"
//               style={{ width: "230px" }}
//             />
//             <h3 className="mt-4 text-muted fs-5">Venu Madhav</h3>
//             <p className="text-muted">COO</p>
//           </div>
//         </div>
//         <div className="row text-center">
//           <div className="col-4 pt-5">
//             <img
//               className="rounded-circle"
//               src="media/images/hanan.jpg"
//               alt="ceo-image"
//               style={{ width: "230px" }}
//             />
//             <h3 className="mt-4 text-muted fs-5">Hanan Delvi</h3>
//             <p className="text-muted">CCO</p>
//           </div>
//           <div className="col-4 pt-5">
//             <img
//               className="rounded-circle"
//               src="media/images/seema.jpg"
//               alt="ceo-image"
//               style={{ width: "230px" }}
//             />
//             <h3 className="mt-4 text-muted fs-5">Seema Patil</h3>
//             <p className="text-muted">Director</p>
//           </div>
//           <div className="col-4 pt-5">
//             <img
//               className="rounded-circle"
//               src="media/images/karthik.jpg"
//               alt="ceo-image"
//               style={{ width: "230px" }}
//             />
//             <h3 className="mt-4 text-muted fs-5">Karthik Rangappa</h3>
//             <p className="text-muted">Chief of Education</p>
//           </div>
//         </div>
//         <div className="row text-center">
//           <div className="col-4 pt-5">
//             <img
//               className="rounded-circle"
//               src="media/images/austin.jpg"
//               alt="ceo-image"
//               style={{ width: "230px" }}
//             />
//             <h3 className="mt-4 text-muted fs-5">Austin Prakesh</h3>
//             <p className="text-muted">Director Strategy</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Team;

import React from "react";
import { Link } from "react-router-dom";
import "./Team.css"; // Import the updated CSS

function Team() {
  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col text-center m-5">
          <h1 className="mt-5 text-muted fs-2">People</h1>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 text-center pt-5">
            <img
              className="rounded-circle team-img"
              src="media/images/nithin-kamath.jpg"
              alt="ceo-image"
            />
            <h3 className="mt-4 text-muted fs-4">Nithin Kamath</h3>
            <p className="text-muted">Founder, CEO</p>
          </div>
          <div className="col-md-6 col-12 mt-5 team-info">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <Link to="/" className="team-link">
                Homepage
              </Link>
              /
              <Link to="/" className="team-link">
                TradingQnA
              </Link>
              /
              <Link to="/" className="team-link">
                Twitter
              </Link>
            </p>
          </div>
        </div>
        {/* Team Members Section */}
        <div className="row text-center mt-5">
          <div className="col-sm-6 col-md-4 pt-5">
            <img
              className="rounded-circle team-img"
              src="media/images/nikhil.jpg"
              alt="nikhil-image"
            />
            <h3 className="mt-4 text-muted fs-5">Nikhil Kamath</h3>
            <p className="text-muted">Co-founder & CFO</p>
          </div>
          <div className="col-sm-6 col-md-4 pt-5">
            <img
              className="rounded-circle team-img"
              src="media/images/kailash.jpg"
              alt="kailash-image"
            />
            <h3 className="mt-4 text-muted fs-5">Dr. Kailash Nadh</h3>
            <p className="text-muted">CTO</p>
          </div>
          <div className="col-sm-6 col-md-4 pt-5">
            <img
              className="rounded-circle team-img"
              src="media/images/venu.jpg"
              alt="venu-image"
            />
            <h3 className="mt-4 text-muted fs-5">Venu Madhav</h3>
            <p className="text-muted">COO</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-sm-6 col-md-4 pt-5">
            <img
              className="rounded-circle team-img"
              src="media/images/hanan.jpg"
              alt="hanan-image"
            />
            <h3 className="mt-4 text-muted fs-5">Hanan Delvi</h3>
            <p className="text-muted">CCO</p>
          </div>
          <div className="col-sm-6 col-md-4 pt-5">
            <img
              className="rounded-circle team-img"
              src="media/images/seema.jpg"
              alt="seema-image"
            />
            <h3 className="mt-4 text-muted fs-5">Seema Patil</h3>
            <p className="text-muted">Director</p>
          </div>
          <div className="col-sm-6 col-md-4 pt-5">
            <img
              className="rounded-circle team-img"
              src="media/images/karthik.jpg"
              alt="karthik-image"
            />
            <h3 className="mt-4 text-muted fs-5">Karthik Rangappa</h3>
            <p className="text-muted">Chief of Education</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 pt-5">
            <img
              className="rounded-circle team-img"
              src="media/images/austin.jpg"
              alt="austin-image"
            />
            <h3 className="mt-4 text-muted fs-5">Austin Prakesh</h3>
            <p className="text-muted">Director Strategy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

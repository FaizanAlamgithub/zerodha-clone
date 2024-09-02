// import React from "react";

// function SignupLogin() {
//   return (
//     <div>
//       <h1>This is your main page</h1>
//       <iframe
//         src="http://localhost:3000/login"
//         title="Other Localhost page"
//         width="100%"
//         height="600px"
//         style={{ border: "none" }}
//       ></iframe>
//     </div>
//   );
// }

// export default SignupLogin;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";

function SignupLogin() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("All fields are require");
    }
    try {
      const url = "https://zerodha-clone-gtro.onrender.com/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3000/login";
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <img
            style={{ marginTop: "22px" }}
            width={550}
            src="landingSignup.png"
          />
        </div>
        <div className="col-6">
          <div className="body-container">
            <div className="auth-container">
              <div className="img-logo">
                <img src="logo.png" style={{ width: "50px" }} />
              </div>
              <h4>Signup</h4>
              <form onSubmit={handleSignup}>
                <label htmlFor="name">Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  autoFocus
                  placeholder="Enter your name"
                  value={signupInfo.name}
                />
                <br />
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={signupInfo.email}
                />
                <br />
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={signupInfo.password}
                />
                <br />
                <div style={{ alignItems: "center" }}>
                  <button className="auth-btn" type="submit">
                    Signup
                  </button>
                </div>
                <span>
                  Already have an account ?
                  <Link
                    style={{ textDecoration: "none" }}
                    to="https://zerodha-clone-dashboard-auyw.onrender.com/login"
                  >
                    Login
                  </Link>
                </span>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col p-5 text-center text-muted">
            <p style={{ fontSize: "14px" }}>
              I authorise Zerodha to contact me even if my number is registered
              on DND. I authorise Zerodha to fetch my KYC information from the
              C-KYC registry with my PAN. Please visit{" "}
              <Link style={{ textDecoration: "none" }} to="/">
                this article{" "}
              </Link>{" "}
              to know more.
            </p>
            <p style={{ fontSize: "14px" }}>
              If you are looking to open a HUF, Corporate, Partnership, or NRI
              account, you have to use the{" "}
              <Link style={{ textDecoration: "none" }} to="/">
                offline forms
              </Link>
              . For help,{" "}
              <Link style={{ textDecoration: "none" }} to="/">
                click here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupLogin;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="px-5 p-3 navbar border-bottom navbar-expand-lg navbar-light bg-white">
      <Link class="navbar-brand px-5" aria-current="page" to="/">
        <img style={{ width: "20%" }} src="media/images/logo.svg" alt="logo" />
      </Link>
      {/* <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> */}

      <form>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link
                class="nav-link active px-4"
                id="menu"
                aria-current="page"
                to="/signup"
              >
                Signup <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active px-4"
                id="menu"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li class="nav-item ">
              <Link
                class="nav-link active px-4"
                id="menu"
                aria-current="page"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active px-4"
                id="menu"
                aria-current="page"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active px-4"
                id="menu"
                aria-current="page"
                to="/support"
              >
                Support
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link active px-4" aria-current="page" href="#">
                <i class="fa-solid fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>
      </form>
    </nav>
  );
}

export default Navbar;

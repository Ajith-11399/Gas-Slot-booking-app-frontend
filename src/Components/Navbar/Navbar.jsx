import React from "react";
import { Link } from "react-router-dom";
// Navbar Css
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary sticky-top">
        <div className="container-fluid p-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/home" className="navbar-brand">
            CloudNiine
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gas" className="nav-link">
                  Gas
                </Link>
              </li>
            </ul>
            <Link to="/" className="register">
              <button className="btn btn-dark">Create Account</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

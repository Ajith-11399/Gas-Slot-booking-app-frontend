import React from "react";
import "./HeroSection.css";
import girl from "./girl.webp";
import { Link } from "react-router-dom";    

const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center justify-content-center pt-5 mt-4 py-5">
          <div className="col-lg-7 col-md-12 col-sm-12 order-2 order-lg-1 hero-text">
            <div className="text-center text-lg-start">
              <h1 className="display-md-2 display-4 fw-normal text-violet font-curv">
                Skip the Lines.
                <br />
                Relax and Refuel with CloudNiine
              </h1>
              <p className="desc font-curv text-violet">
                The only frustration you absolutely have to avoid? Running out
                of gas.
              </p>
              <Link to="/gas" className="btn btn-primary bg-violet mb-5">
                Book Now
              </Link>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12 mb-3 order-1 order-lg-2 p-4">
            <img src={girl} alt="CloudNine" className="cloudNine shadow-lg" />
          </div>
        </div>
      </div>

      <div className="text-center text-violet">
        <a href="#service">
          <i className="fa-regular fa-circle-down"></i>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

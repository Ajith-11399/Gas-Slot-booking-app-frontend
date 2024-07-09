import React from "react";
import "./GasBanner.css";

const GasBanner = () => {
  return (
    <div>
      <div className="gasBanner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <p className="display-3 m-0 text-start fw-medium">
                Fast & Easy Gas Booking
              </p>
              <p className="fs-4 m-0 text-start">
                Quick Delivery at Your Doorstep
              </p>
              <span style={{ color: "whitesmoke" }}>
                Online Booking&nbsp;&nbsp;/&nbsp;&nbsp; Timely
                Delivery&nbsp;&nbsp;/&nbsp;&nbsp; Secure Payment
              </span>
              <br />
              <a href="#products" className="btn btn-primary my-3">
                View Our Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasBanner;

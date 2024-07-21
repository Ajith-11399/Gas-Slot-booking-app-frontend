import React from "react";
import "../FeaturedGas/FeaturedGas.css";
import { Link } from "react-router-dom";
import gasData from "../../GasData/GasData.js";

const FeaturedGas = () => {
  return (
    <section id="products" className="bg-dark">
      <div className="container pt-5 pb-5" id="service">
        <div className="row align-items-center justify-content-evenly">
          <div className="pb-5 text-center">
            <p className="display-6 p-1 fw-normal text-light">OUR PRODUCTS</p>
            <p className="fs-5 fw-medium text-light">
              Discover Our Extensive Range of Alternative Fuel Solutions
            </p>
          </div>
          {gasData.map((element, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 p-3">
              <div className="card shadow-lg h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="text-center pt-3 mb-3">
                    <img
                      src={element.photo}
                      className="img-fluid rounded-4 shadow"
                      alt=""
                    />
                  </div>
                  <div className="card-title text-center">
                    <Link
                      to={`/gas/${element.id}`}
                      className="text-decoration-none text-dark title-name"
                    >
                      <p className="fs-4 fw-medium">
                        {element.title} <br />
                        <span className="fs-6 m-0 text-muted">
                          Fuel Type: {element.type}
                        </span>
                      </p>
                    </Link>
                    <p className="text-muted m-0 fw-medium">
                      ₹.&nbsp;{element.price}
                    </p>
                    <p className="text-success fw-medium">
                      In Stock: {element.stock}
                    </p>
                  </div>
                  <div className="d-flex flex-column">
                    <Link to={`/gas/${element.id}`} className="mb-2">
                      <button className="btn btn-primary w-100 fw-medium">
                        Detail <i className="fa-solid fa-circle-info"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGas;

import React from "react";
import { Link, useParams } from "react-router-dom";
import gasData from "../GasData/GasData.js";

const GasCards = () => {
  const { id } = useParams();
  const gas = gasData.find((gas) => gas.id == id);

  if (!gas) {
    return <div>Gas not found</div>;
  }
  return (
    <div>
      <div className="card shadow-lg">
        <div className="card-body">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-12 col-sm-12 py-2">
              <div>
                <img
                  src={gas.photo}
                  className="img-fluid rounded-4 shadow"
                  alt={gas.title}
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 py-2">
              <div className="card-title">
                <p className="fs-4 m-0 fw-medium">₹&nbsp;{gas.price}</p>
                <p className="fs-4 mb-3 fw-medium">
                  Product&nbsp;:&nbsp;{gas.title} <br />
                  <span className="fs-6">
                    <b>Fuel Type:</b> {gas.type}
                  </span>
                </p>
                <p className="fs-6 m-0 fw-normal">{gas.description}</p>
                <p className="fs-6 m-0">
                  <b>Stocks left to grab&nbsp;:</b>&nbsp;{gas.stock}
                </p>
                <p className="fs-6 m-0 fw-normal">
                  <b>Average Rating&nbsp;:&nbsp;</b>
                  {gas.avgRating}
                </p>
                {/* <p className="fs-5 fw-medium">
                  <b>Customer Rating&nbsp;:&nbsp;</b>
                  <br />
                  <span className="fs-6 fw-normal">
                    <b>Rating&nbsp;:&nbsp;</b>
                    {gas.reviewerRating} <br />
                    <b>Rated by&nbsp;:&nbsp;</b>
                    {gas.reviewerName}
                  </span>
                </p> */}
              </div>
              {/* <div className="text-start">
                <Link className="">
                  <button className="btn btn-primary">Book Now&nbsp;!</button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasCards;

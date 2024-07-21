import React from "react";
import { useParams } from "react-router-dom";
import gasData from "../GasData/GasData.js";

const GasCards = () => {
  const { id } = useParams();
  const gas = gasData.find((gas) => gas.id === id);

  if (!gas) {
    return <div>Gas not found</div>;
  }

  return (
    <div className="col-lg-6 col-md-12 col-sm-12 my-2">
      <div className="card shadow-lg">
        <div className="card-body">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-5 col-sm-12 py-2">
              <img
                src={gas.photo}
                className="img-fluid rounded-4 shadow"
                alt={gas.title}
              />
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 py-2">
              <div className="card-title">
                <table className="table">
                  <tbody>
                    <tr>
                      <td colSpan="2">
                        <p className="fs-5 fw-medium">₹ {gas.price}</p>
                      </td>
                    </tr>
                    <tr className="fs-5 fw-medium">
                      <th scope="row">Product:</th>
                      <td>{gas.title}</td>
                    </tr>
                    <tr className="fs-6 fw-medium">
                      <th scope="row">Fuel Type:</th>
                      <td>{gas.type}</td>
                    </tr>
                    <tr className="fs-6 fw-medium">
                      <th scope="row">Stocks left:</th>
                      <td>{gas.stock}</td>
                    </tr>
                    <tr className="fs-6 fw-medium">
                      <th scope="row">Average Rating:</th>
                      <td>{gas.avgRating}</td>
                    </tr>
                    <tr className="fs-6 fw-medium">
                      <td colSpan="2">{gas.description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasCards;

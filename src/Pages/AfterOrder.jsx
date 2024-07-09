import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const AfterOrder = () => {
  return (
    <div>
      <Navbar />
      <div className="container text-center my-5 py-5">
        <p className="" style={{ fontSize: "80px" }}>
          THANKS!
        </p>

        <p className="fs-2 lead text-muted mb-4">
          Your order has been placed successfully!
        </p>
        <h1 className="fs-5 text-success mb-5">Have a great day!</h1>
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default AfterOrder;

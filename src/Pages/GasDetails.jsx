import React from "react";
import GasCards from "../Shared/GasCards";
import GasCardForm from "../Shared/GasCardForm";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const GasDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <GasCards />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <GasCardForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GasDetails;

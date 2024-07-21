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
          <GasCards />
          <GasCardForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GasDetails;

import React, { useState } from "react";
import gasData from "../GasData/GasData.js";
import "./GasCardForm.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const GasCardForm = () => {
  const { id } = useParams();
  const gas = gasData.find((gas) => gas.id == id);
  const navigate = useNavigate();

  if (!gas) {
    return <div>Gas not found</div>;
  }

  const deliveryCharge = 10;
  const price = gas.price || 0;
  const [creds, setCreds] = useState({
    email: "",
    product: gas.title,
    quantity: "1",
    fullName: "",
    address: "",
    date: "",
    timeSlot: "",
    phoneNumber: "",
    totalPrice: price + deliveryCharge,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCreds((prev) => {
      const updatedCreds = { ...prev, [id]: value };

      if (id === "quantity") {
        const totalCharge =
          Number(price) * Number(value) + Number(deliveryCharge);
        updatedCreds.totalPrice = totalCharge;
      }

      return updatedCreds;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/v1/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Booking successful:", data);

      // Redirect or show success message
      navigate("/thanks");
    } catch (error) {
      console.error("Error submitting booking:", error.message);
      // Handle error state or display an error message to the user
    }
  };

  const totalCharge =
    Number(price) * Number(creds.quantity) + Number(deliveryCharge);

  return (
    <div className="rounded-4 shadow-lg">
      <div className="card mb-5">
        <div className="card-body">
          <p className="fs-1 text-center mb-4">Fill this out!</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group row mb-3">
              {/* Your Name Here */}
              <label htmlFor="fullName" className="col-sm-2 col-form-label">
                <i className="fa-solid fa-user"></i>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="fullName"
                  className="form-control border-bottom"
                  placeholder="Enter Your Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              {/* Choose Date */}
              <label htmlFor="email" className="col-sm-2 col-form-label">
                <i className="fa-regular fa-envelope"></i>
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  id="email"
                  className="form-control border-bottom"
                  placeholder="Your Email Address"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              {/* Choose Date */}
              <label htmlFor="date" className="col-sm-2 col-form-label">
                <i className="fa-solid fa-calendar-days"></i>
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  id="date"
                  className="form-control border-bottom"
                  placeholder="Select Your Date"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              {/* Choose Time Slot */}
              <label htmlFor="timeSlot" className="col-sm-2 col-form-label">
                <i className="fa-regular fa-clock"></i>
              </label>
              <div className="col-sm-10">
                <select
                  id="timeSlot"
                  className="form-control border-bottom"
                  onChange={handleChange}
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                  <option value="18:00">06:00 PM</option>
                </select>
              </div>
            </div>
            <div className="form-group row mb-3">
              {/* Address */}
              <label htmlFor="address" className="col-sm-2 col-form-label">
                <i className="fa-solid fa-location-dot"></i>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="address"
                  className="form-control border-bottom"
                  placeholder="Your Full Address"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              {/* Number of Products */}
              <label htmlFor="quantity" className="col-sm-2 col-form-label">
                <i className="fa-solid fa-hashtag"></i>
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  id="quantity"
                  className="form-control border-bottom"
                  placeholder="Number of Products"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              {/* Phone Number */}
              <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">
                <i className="fa-solid fa-phone"></i>
              </label>
              <div className="col-sm-10">
                <input
                  type="tel"
                  id="phoneNumber"
                  className="form-control border-bottom"
                  placeholder="Your Number here"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="card text-center border my-3 pt-4">
              <p className="fs-6">Product Charges: ${price}</p>
              <p className="fs-6">Delivery Charges: ${deliveryCharge}</p>
              <p className="fs-6">Total Charges: ${totalCharge}</p>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GasCardForm;

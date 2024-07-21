import React, { useState } from "react";
import gasData from "../GasData/GasData.js";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const GasCardForm = () => {
  const { id } = useParams();
  const gas = gasData.find((gas) => gas.id === id);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  if (!gas) {
    return <div>Gas not found</div>;
  }

  const deliveryCharge = 10;
  const price = gas.price || 0;

  const initialValues = {
    email: "",
    product: gas.title,
    quantity: "1",
    fullName: "",
    address: "",
    date: "",
    timeSlot: "",
    phoneNumber: "",
    totalPrice: price + deliveryCharge,
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name should not be empty"),
    email: Yup.string()
      .email("Invalid Email format")
      .required("Email Address should not be empty"),
    phoneNumber: Yup.string()
      .matches(
        /^\+?(\d{1,3})?[-.\s]?((\(?\d{1,4}\)?)|(\d{1,4}))[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        "Invalid Phone Number"
      )
      .required("Phone should not be empty"),
    date: Yup.string().required("Date should not be empty"),
    timeSlot: Yup.string().required("Time Slot should not be empty"),
    address: Yup.string().required("Address should not be empty"),
    quantity: Yup.string().required("Quantity should not be empty"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const totalPrice =
      Number(price) * Number(values.quantity) + Number(deliveryCharge);

    const payload = {
      fullName: values.fullName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      date: values.date,
      timeSlot: values.timeSlot,
      address: values.address,
      quantity: values.quantity,
      totalPrice: totalPrice,
      product: values.product,
    };

    try {
      const res = await axios.post(
        "https://gas-slot-booking-app-backend.onrender.com/api/user/booking",
        payload
      );
      setMessage(res.data.message);

      if (res.data.message === "Your order has been placed successfully!") {
        if (window.Razorpay) {
          const options = {
            key: "rzp_test_m1LXPc7yWDCdO6",
            amount: totalPrice * 100,
            currency: "INR",
            name: "CloudNiine",
            description: "Gas Booking Payment",
            handler: async (response) => {
              try {
                await axios.post(
                  "https://gas-slot-booking-app-backend.onrender.com/api/user/update-payment-status",
                  {
                    orderId: response.razorpay_order_id,
                    paymentId: response.razorpay_payment_id,
                    signature: response.razorpay_signature,
                  }
                );
                alert(`Payment ID: ${response.razorpay_payment_id}`);
                alert(`Order ID: ${response.razorpay_order_id}`);
                alert(`Signature: ${response.razorpay_signature}`);
                navigate("/thanks");
              } catch (error) {
                console.error("Payment status update failed:", error);
                setMessage("Failed to update payment status.");
              }
            },
            prefill: {
              name: values.fullName,
              email: values.email,
              contact: values.phoneNumber,
            },
            notes: {
              address: values.address,
            },
            theme: {
              color: "#3399cc",
            },
          };

          const rzp1 = new window.Razorpay(options);
          rzp1.open();
        } else {
          console.error("Razorpay script not loaded");
        }
      }
    } catch (error) {
      console.error(
        "Error response:",
        error.response ? error.response.data : error.message
      );
      setMessage(error.response?.data?.message || "An error occurred");
    }
    setSubmitting(false);
  };

  return (
    <div className="col-lg-6 col-md-12 col-sm-12 my-2">
      <div className="card shadow-sm border-0 rounded-3">
        <div className="card-body shadow-lg p-4">
          <h2 className="card-title text-center mb-4">Gas Booking Form</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, setFieldValue }) => {
              const totalCharge =
                Number(price) * Number(values.quantity) +
                Number(deliveryCharge);
              return (
                <Form>
                  <div className="row">
                    {/* Name */}
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        <Field
                          type="text"
                          id="fullName"
                          name="fullName"
                          placeholder="Enter Your Full Name"
                          className="form-control"
                          required
                        />
                      </div>
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa-regular fa-envelope"></i>
                        </span>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your Email Address"
                          className="form-control"
                          required
                        />
                      </div>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Date */}
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <label htmlFor="date" className="form-label">
                        Delivery Date
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa-solid fa-calendar-days"></i>
                        </span>
                        <Field
                          type="date"
                          id="date"
                          name="date"
                          className="form-control"
                          required
                        />
                      </div>
                      <ErrorMessage
                        name="date"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Time Slot */}
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <label htmlFor="timeSlot" className="form-label">
                        Delivery Time Slot
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa-regular fa-clock"></i>
                        </span>
                        <Field
                          as="select"
                          id="timeSlot"
                          name="timeSlot"
                          className="form-select"
                          required
                        >
                          <option value="">Select Time Slot</option>
                          <option value="9AM - 10AM">9AM - 10AM</option>
                          <option value="10AM - 11AM">10AM - 11AM</option>
                          <option value="11AM - 12PM">11AM - 12PM</option>
                          <option value="12PM - 1PM">12PM - 1PM</option>
                          <option value="1PM - 2PM">1PM - 2PM</option>
                          <option value="2PM - 3PM">2PM - 3PM</option>
                          <option value="3PM - 4PM">3PM - 4PM</option>
                        </Field>
                      </div>
                      <ErrorMessage
                        name="timeSlot"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone Number
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                        <Field
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="Enter Your Phone Number"
                          className="form-control"
                          required
                        />
                      </div>
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <label htmlFor="quantity" className="form-label">
                        Quantity
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa-solid fa-gas-pump"></i>
                        </span>
                        <Field
                          type="number"
                          id="quantity"
                          name="quantity"
                          placeholder="Quantity"
                          className="form-control"
                          required
                          onChange={(e) =>
                            setFieldValue("quantity", e.target.value)
                          }
                        />
                      </div>
                      <ErrorMessage
                        name="quantity"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Delievery Address */}
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                      <label htmlFor="address" className="form-label">
                        Delivery Address
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <Field
                          as="textarea"
                          id="address"
                          name="address"
                          placeholder="Enter Delivery Address"
                          className="form-control"
                          required
                        />
                      </div>
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    {/* Product Name */}
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <label htmlFor="product" className="form-label">
                        Product
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa-solid fa-box"></i>
                        </span>
                        <Field
                          type="text"
                          id="product"
                          name="product"
                          value={gas.title}
                          readOnly
                          className="form-control"
                        />
                      </div>
                    </div>

                    {/* Total Price */}
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <label htmlFor="totalPrice" className="form-label">
                        Total Price
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa-solid fa-dollar-sign"></i>
                        </span>
                        <Field
                          type="text"
                          id="totalPrice"
                          name="totalPrice"
                          value={totalCharge}
                          readOnly
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-5 mb-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>

                  {message && (
                    <div className="alert alert-info mt-3" role="alert">
                      {message}
                    </div>
                  )}
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default GasCardForm;

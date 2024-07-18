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
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email format"
      )
      .required("Email Address should not be empty"),
    phoneNumber: Yup.string()
      .matches(
        /^\+?(\d{1,3})?[-.\s]?((\(?\d{1,4}\)?)|(\d{1,4}))[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        "Invalid Phone Number"
      )
      .required("Phone should not be empty"),
    date: Yup.string().required("Date should not be empty"),
    timeSlot: Yup.string().required("Time Slot should not be empty"),
    address: Yup.string().required("Address should not be empty"),
    quantity: Yup.string().required("Quantity should not be empty"),
  });

  // const handleSubmit = async (values, { setSubmitting }) => {
  //   const totalPrice =
  //     Number(price) * Number(values.quantity) + Number(deliveryCharge);

  //   const payload = {
  //     fullName: values.fullName,
  //     email: values.email,
  //     phoneNumber: values.phoneNumber,
  //     date: values.date,
  //     timeSlot: values.timeSlot,
  //     address: values.address,
  //     quantity: values.quantity,
  //     totalPrice: totalPrice,
  //   };

  //   console.log("Payload:", payload);

  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/api/user/booking",
  //       payload
  //     );
  //     setMessage(res.data.message);
  //     if (res.data.message === "Your order has been placed successfully!") {
  //       setTimeout(() => {
  //         navigate("/thanks");
  //       }, 1500);
  //     }
  //   } catch (error) {
  //     console.log("Error response:", error.response.data); // Log full error response
  //     setMessage(error.response?.data?.message || "An error occurred");
  //   }
  //   setSubmitting(false);
  // };

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

    console.log("Payload:", payload);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/booking",
        payload
      );
      setMessage(res.data.message);
      if (res.data.message === "Your order has been placed successfully!") {
        setTimeout(() => {
          navigate("/thanks");
        }, 1500);
      }
    } catch (error) {
      console.log("Error response:", error.response.data);
      setMessage(error.response?.data?.message || "An error occurred");
    }
    setSubmitting(false);
  };

  return (
    <div className="rounded-4 shadow-lg">
      <div className="card mb-5">
        <div className="card-body">
          <p className="fs-1 text-center mb-4">Fill this out!</p>
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
                  <div className="mb-3">
                    <label
                      htmlFor="fullName"
                      className="col-sm-2 col-form-label"
                    >
                      <i className="fa-solid fa-user"></i>
                    </label>
                    <Field
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter Your Full Name"
                      className="form-control"
                      required
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                      <i className="fa-regular fa-envelope"></i>
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email Address"
                      className="form-control"
                      required
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="date" className="col-sm-2 col-form-label">
                      <i className="fa-solid fa-calendar-days"></i>
                    </label>
                    <Field
                      type="date"
                      id="date"
                      name="date"
                      className="form-control"
                      required
                    />
                    <ErrorMessage
                      name="date"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="timeSlot"
                      className="col-sm-2 col-form-label"
                    >
                      <i className="fa-regular fa-clock"></i>
                    </label>
                    <Field
                      as="select"
                      id="timeSlot"
                      name="timeSlot"
                      className="form-control border-bottom"
                      required
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
                    </Field>
                    <ErrorMessage
                      name="timeSlot"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="address"
                      className="col-sm-2 col-form-label"
                    >
                      <i className="fa-solid fa-location-dot"></i>
                    </label>
                    <Field
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Your Full Address"
                      className="form-control"
                      required
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="quantity"
                      className="col-sm-2 col-form-label"
                    >
                      <i className="fa-solid fa-hashtag"></i>
                    </label>
                    <Field
                      type="number"
                      id="quantity"
                      name="quantity"
                      placeholder="Number of Products"
                      className="form-control"
                      onChange={(e) => {
                        setFieldValue("quantity", e.target.value);
                        const updatedTotalCharge =
                          Number(price) * Number(e.target.value) +
                          Number(deliveryCharge);
                        setFieldValue("totalPrice", updatedTotalCharge);
                      }}
                      required
                    />
                    <ErrorMessage
                      name="quantity"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="phoneNumber"
                      className="col-sm-2 col-form-label"
                    >
                      <i className="fa-solid fa-phone"></i>
                    </label>
                    <Field
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Your Number here"
                      className="form-control"
                      required
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="card text-center border my-3 pt-4">
                    <p className="fs-6">Product Charges: ${price}</p>
                    <p className="fs-6">Delivery Charges: ${deliveryCharge}</p>
                    <p className="fs-6">Total Charges: ${totalCharge}</p>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={isSubmitting}
                  >
                    Book Now
                  </button>
                </Form>
              );
            }}
          </Formik>
          <h6>{message}</h6>
        </div>
      </div>
    </div>
  );
};

export default GasCardForm;

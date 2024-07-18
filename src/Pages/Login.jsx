import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import logInImg from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email format"
      )
      .required("Email Address should not be empty"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        `Min 8 characters | At least a letter Uppercase | At least one digit must | At least one special character`
      )
      .required("Password should not be empty"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/login-user",
        payload
      );
      setMessage(res.data.message);
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (error) {
      console.log(error);
      setMessage(error.response?.data?.message || "An error occurred");
    }
    setSubmitting(false);
  };

  return (
    <div className="container p-2 mt-5 mb-5 reg-box">
      <h2 className="text-primary mb-4 text-center">
        Login to continue as&nbsp;
        <span className="font-curv text-violet">CloudNine family</span>
      </h2>
      <div className="row align-items-center justify-content-center m-3">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="login-img text-center">
            <img src={logInImg} alt="Login" className="img-fluid creds" />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address:
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-3"
                  disabled={isSubmitting}
                >
                  Log In
                </button>
              </Form>
            )}
          </Formik>
          <h6>{message}</h6>
        </div>
      </div>
    </div>
  );
};

export default Login;

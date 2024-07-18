// import { ErrorMessage, Field, Form, Formik } from "formik";
// import React, { useState } from "react";
// import * as Yup from "yup";
// import signUpImg from "../assets/sign-up.png";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name should not be empty"),
//     email: Yup.string()
//       .matches(
//         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         "Invalid Email format"
//       )
//       .required("Email Address should not be empty"),
//     phone: Yup.string()
//       .matches(
//         /^\+?(\d{1,3})?[-.\s]?((\(?\d{1,4}\)?)|(\d{1,4}))[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
//         "Invalid Phone Number"
//       )
//       .required("Phone should not be empty"),
//     password: Yup.string()
//       .matches(
//         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//         `Min 8 characters | At least a letter Uppercase | At least one digit must | At least one special character`
//       )
//       .required("Password should not be empty"),
//     password: Yup.string()
//       .matches(
//         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//         "Min 8 characters | At least a letter Uppercase | At least one digit must | At least one special character"
//       )
//       .required("Password should not be empty"),
//   });

//   const handleSubmit = async (values, { setSubmitting }) => {
//     const payload = {
//       name: values.name,
//       email: values.email,
//       phone: values.phone,
//       password: values.password,
//     };
//     try {
//       await axios
//         .post(
//           "https://gas-slot-booking-app-backend.onrender.com/api/user/register-user",
//           payload
//         )
//         .then((res) => setMessage(res.data.message))
//         .catch((error) => {
//           console.log(error);
//           setMessage(res.data.message);
//         });
//     } catch (error) {
//       console.log(error);
//       setMessage(error.response?.data?.message || "An error occurred");
//     }
//     setSubmitting(false);
//     setTimeout(() => {
//       navigate("/sign-in");
//     }, 1500);
//   };

//   return (
//     <div className="container p-2 mt-5 mb-5 reg-box">
//       <h2 className="text-primary mb-4 text-center">
//         Sign up to become our&nbsp;
//         <span className="font-curv text-violet">CloudNine family</span>
//       </h2>
//       <div className="row align-items-center justify-content-center m-3">
//         <div className="col-lg-4 col-md-6 col-sm-12">
//           <div className="sign-up-img text-center">
//             <img src={signUpImg} alt="Girl" className="img-fluid creds" />
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6 col-sm-12">
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">
//                     Your Name:
//                   </label>
//                   <Field
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="form-control"
//                   />
//                   <ErrorMessage
//                     name="name"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email Address:
//                   </label>
//                   <Field
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="form-control"
//                   />
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="phone" className="form-label">
//                     Phone:
//                   </label>
//                   <Field
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     className="form-control"
//                   />
//                   <ErrorMessage
//                     name="phone"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     Password:
//                   </label>
//                   <Field
//                     type="password"
//                     id="password"
//                     name="password"
//                     className="form-control"
//                   />
//                   <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-primary btn-block mt-3"
//                   disabled={isSubmitting}
//                 >
//                   Sign Up
//                 </button>
//               </Form>
//             )}
//           </Formik>
//           <h6>{message}</h6>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import signUpImg from "../assets/sign-up.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name should not be empty"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email format"
      )
      .required("Email Address should not be empty"),
    phone: Yup.string()
      .matches(
        /^\+?(\d{1,3})?[-.\s]?((\(?\d{1,4}\)?)|(\d{1,4}))[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        "Invalid Phone Number"
      )
      .required("Phone should not be empty"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Min 8 characters | At least a letter Uppercase | At least one digit must | At least one special character"
      )
      .required("Password should not be empty"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
    };
    try {
      const res = await axios.post("http://localhost:5000/api/user/register-user", payload);
      setMessage(res.data.message);
      if (res.data.message === "User has registered successfully!") {
        setTimeout(() => {
          navigate("/sign-in");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      setMessage(error.response?.data?.message || "An error occurred");
    }
    setSubmitting(false);
  };

  return (
    <div className="container p-2 mt-5 mb-5 reg-box">
      <h2 className="text-primary mb-4 text-center">
        Sign up to become our&nbsp;
        <span className="font-curv text-violet">CloudNine family</span>
      </h2>
      <div className="row align-items-center justify-content-center m-3">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="sign-up-img text-center">
            <img src={signUpImg} alt="Girl" className="img-fluid creds" />
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
                  <label htmlFor="name" className="form-label">
                    Your Name:
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
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
                  <label htmlFor="phone" className="form-label">
                    Phone:
                  </label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="phone"
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
                  Sign Up
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

export default Register;

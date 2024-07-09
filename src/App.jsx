import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Gas from "./Pages/Gas.jsx";
import GasDetails from "./Pages/GasDetails.jsx";
import AfterOrder from "./Pages/AfterOrder.jsx";
import PageNotFound from "./Components/PageNotFound.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gas" element={<Gas />} />
          <Route path="/gas/:id" element={<GasDetails />} />
          <Route path="/thanks" element={<AfterOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

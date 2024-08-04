import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Doctor from "../Pages/Doctors/Doctor";
import DoctorDetails from "../Pages/Doctors/DoctorDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/doctor/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Routers;

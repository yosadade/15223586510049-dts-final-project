import React from "react";
import Home from "../pages/Home";
import Culinary from "../pages/Culinary";
import Tour from "../pages/Tour";
import Sport from "../pages/Sport";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Footer from "../components/moleculs/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/moleculs/Navbar";
import Head from "../components/moleculs/Head";

const Routers = () => {
  return (
    <BrowserRouter>
      {/* {/* <Head /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/singlepage/:id" exact element={SinglePage} /> */}
        <Route path="/culinary" element={<Culinary />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/sport" element={<Sport />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Routers;

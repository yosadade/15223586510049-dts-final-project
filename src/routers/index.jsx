import React from "react";
import Home from "../pages/Home";
import Footer from "../components/moleculs/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/moleculs/Navbar";
import Head from "../components/moleculs/Head";

const Routers = () => {
  return (
    <BrowserRouter>
      <Head />
      <Navbar />
      <Routes>
        {/* <Home /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/singlepage/:id" exact element={SinglePage} /> */}
        {/* <Route path="/culture" element={Culture} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;

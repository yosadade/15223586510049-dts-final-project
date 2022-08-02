import React from "react";
import Home from "../pages/Home";
import Footer from "../components/common/footer/Footer";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Head from "../components/Head";

const Routers = () => {
  return (
    <>
      <Routes>
        <Head />
        <Navbar />
        {/* <Header /> */}
        <Home />
        {/* <Route path="/" component={Homepages} />
        <Route path="/singlepage/:id" exact component={SinglePage} />
        <Route path="/culture" component={Culture} /> */}
        <Footer />
      </Routes>
    </>
  );
};

export default Routers;

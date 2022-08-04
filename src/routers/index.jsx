import React from "react";
import Home from "../pages/Home";
import Politics from "../pages/Politics";
import Lifestyle from "../pages/Lifestyle";
import Sport from "../pages/Sport";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Footer from "../components/moleculs/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/moleculs/Navbar";
import Head from "../components/moleculs/Head";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";

const Routers = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <BrowserRouter>
      {user && <Head />}
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/singlepage/:id" exact element={SinglePage} /> */}
        <Route path="/politics" element={<Politics />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/sport" element={<Sport />} />
      </Routes>
      {user && <Footer />}
    </BrowserRouter>
  );
};

export default Routers;

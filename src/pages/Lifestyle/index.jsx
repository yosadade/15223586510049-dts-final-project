import Axios from "axios";
import React, { useEffect, useState } from "react";
import { auth } from "../../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Popular from "../../components/home/mainContent/popular/Popular";
import Hero from "../../components/moleculs/Hero";

import "./styles.css";

const Lifestyle = () => {
  const [data, setData] = useState({});

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const fecthAPI = () => {
    Axios.get("https://api-berita-indonesia.vercel.app/antara/lifestyle/")
      .then((res) => {
        const fetchData = res?.data?.data?.posts;
        setData(fetchData);
        console.log(fetchData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fecthAPI();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/signin");
      return;
    }
  }, [navigate, user]);

  if (loading || !data) {
    return;
  }

  return (
    <>
      <Hero />
      <div className="container">
        <section className="mainContent">
          <Popular data={data} category="Lifestyle" />
        </section>
      </div>
    </>
  );
};

export default Lifestyle;

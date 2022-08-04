import React, { useEffect, useState } from "react";
import Hero from "../../components/moleculs/Hero";
import { useNavigate } from "react-router-dom";
import Popular from "../../components/home/mainContent/popular/Popular";
import Axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../authentication/firebase";

import "./styles.css";

const Home = () => {
  const [data, setData] = useState({});

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("https://api-berita-indonesia.vercel.app/antara/terbaru/")
      .then((res) => {
        const fetchData = res?.data?.data?.posts;
        setData(fetchData);
        console.log(fetchData);
      })
      .catch((err) => console.log(err));
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
          <Popular category="Terbaru" />
        </section>
      </div>
    </>
  );
};

export default Home;

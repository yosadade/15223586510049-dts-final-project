import React, { useEffect } from "react";
import Hero from "../../components/moleculs/Hero";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../authentication/firebase";
import Popular from "../../components/home/mainContent/popular/Popular";

import "./styles.css";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
      return;
    }
  }, [navigate, user]);

  if (loading) {
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

import React, { useEffect } from "react";
import Hero from "../../components/moleculs/Hero";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../authentication/firebase";

import "./styles.css";
import PopularHome from "../../components/moleculs/PopularHome";

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
          <PopularHome />
        </section>
      </div>
    </>
  );
};

export default Home;

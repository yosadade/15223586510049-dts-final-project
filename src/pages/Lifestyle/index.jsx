import React, { useEffect } from "react";
import { auth } from "../../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Popular from "../../components/home/mainContent/popular/Popular";
import Hero from "../../components/moleculs/Hero";

import "./styles.css";

const Lifestyle = () => {
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
          <Popular category="Lifestyle" label="Lifestyle" sub="lifestyle" />
        </section>
      </div>
    </>
  );
};

export default Lifestyle;

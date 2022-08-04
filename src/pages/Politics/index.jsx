import React from "react";
import Popular from "../../components/home/mainContent/popular/Popular";
import Hero from "../../components/moleculs/Hero";

import "./styles.css";

const Politics = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <section className="mainContent">
          <Popular category="Politik" label="Politik" sub="politik" />
        </section>
      </div>
    </>
  );
};

export default Politics;

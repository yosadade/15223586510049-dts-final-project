import React from "react";
import Hero from "../../components/moleculs/Hero";
import PopularPolitics from "../../components/moleculs/PopularPolitics";

import "./styles.css";

const Politics = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <section className="mainContent">
          <PopularPolitics />
        </section>
      </div>
    </>
  );
};

export default Politics;

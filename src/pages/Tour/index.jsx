import React from "react";
import Hero from "../../components/moleculs/Hero";
import Life from "../../components/home/mainContent/life/Life";
import Music from "../../components/home/mainContent/musics/Music";
import Popular from "../../components/home/mainContent/popular/Popular";
import Ppost from "../../components/home/mainContent/Ppost/Ppost";

import "./styles.css";

const Tour = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <section className="mainContent">
          <Popular />
          <Ppost />
          <Life />
          <Music />
        </section>
      </div>
    </>
  );
};

export default Tour;

import React from "react";

import Life from "../../components/home/mainContent/life/Life";
import Music from "../../components/home/mainContent/musics/Music";
import Popular from "../../components/home/mainContent/popular/Popular";
import Ppost from "../../components/home/mainContent/Ppost/Ppost";

import "./styles.css";

const Culinary = () => {
  return (
    <>
      <div className="container">
        <section className="mainContent">
          <Ppost />
          <Popular />
          <Life />
        </section>
      </div>
    </>
  );
};

export default Culinary;

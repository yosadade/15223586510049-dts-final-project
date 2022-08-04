import React, { useEffect, useState } from "react";
import Hero from "../../components/moleculs/Hero";
import Popular from "../../components/home/mainContent/popular/Popular";
import Axios from "axios";

import "./styles.css";

const Sport = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    Axios.get("https://api-berita-indonesia.vercel.app/antara/olahraga/")
      .then((res) => {
        const fetchData = res.data.data.posts;
        setData(fetchData);
        console.log(fetchData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Hero />
      <div className="container">
        <section className="mainContent">
          <Popular data={data} category="Olahraga" label="Olahraga" sub="olahraga"/>
        </section>
      </div>
    </>
  );
};

export default Sport;

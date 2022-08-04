import Axios  from "axios";
import React, { useEffect, useState } from "react";
import Popular from "../../components/home/mainContent/popular/Popular";
import Hero from "../../components/moleculs/Hero";

import "./styles.css";

const Lifestyle = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    Axios.get("https://api-berita-indonesia.vercel.app/antara/lifestyle/")
      .then((res) => {
        const fetchData = res?.data?.data?.posts;
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
          <Popular data={data}  category="Lifestyle"/>
        </section>
      </div>
    </>
  );
};

export default Lifestyle;

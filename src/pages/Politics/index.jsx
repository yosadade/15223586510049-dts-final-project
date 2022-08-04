import  Axios  from "axios";
import React, { useEffect, useState } from "react";
import Popular from "../../components/home/mainContent/popular/Popular";
import Hero from "../../components/moleculs/Hero";

import "./styles.css";

const Politics = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    Axios.get("https://api-berita-indonesia.vercel.app/antara/politik/")
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
          {/* <Popular data={data}  category="Politik"/> */}
        </section>
      </div>
    </>
  );
};

export default Politics;

import React, { useEffect, useState } from "react"
import "./Popular.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Label from "../../../atoms/Label"
import Axios  from "axios"


const Popular = ({category, label, sub = 'terbaru'}) => {
  const [data, setData] = useState();

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }


  useEffect(() => {
    Axios.get(`https://api-berita-indonesia.vercel.app/antara/${sub}/`)
      .then((res) => {
        const fetchData = res?.data?.data?.posts;
        setData(fetchData);
        console.log(fetchData);
      })
      .catch((err) => console.log(err));
  }, [sub]);

  return (
    <>
      <section className='popular'>
        <Label title={label} />
        <div className='content'>
          <Slider {...settings}>
            {data?.map((val) => {
              return (
                <div className='items' key={val?.title} onClick={() => console.log(val)}>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={val?.thumbnail} alt='' />
                      </div>
                      <div class='category category1'>
                        <span>{category}</span>
                      </div>
                    </div>
                    <div className='text row'>
                      <h1 className='titles'>{val?.title.slice(0, 40)}...</h1>
                      <div className='date'>
                        <label>{val?.pubDate}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Popular

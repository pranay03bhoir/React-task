import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Slider from "react-slick";
import Images from "./Images.jsx";
const SliderImages = ({ data }) => {
  const slider = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider ref={slider} {...settings}>
        {data.map((data) => (
          <Images
            key={data.id}
            {...data}
            cssClasses={`flex justify-center mt-10 size-72 rounded-lg w-[80%]`}
          />
        ))}
      </Slider>
      <div className={`flex gap-10 justify-center mt-5`}>
        <button
          className={`text-5xl`}
          onClick={() => slider?.current?.slickPrev()}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className={`text-5xl`}
          onClick={() => slider?.current?.slickNext()}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};
export default SliderImages;

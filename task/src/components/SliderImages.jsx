import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Slider from "react-slick";
import Images from "./Images.jsx";
const SliderImages = ({ data }) => {
  const slider = useRef(null);
  useEffect(() => {
    if (slider.current) {
      slider.current.slickGoTo(data.id === 1);
    }
  }, [data]);

  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className={`float-left text-2xl ms-2 lg:ms-20`}>
        <p className={`font text-xl font-extrabold font-sans md:text-2xl`}>
          What's on your mind?
        </p>
      </div>
      <div
        className={` flex gap-5 justify-end relative left-12 lg:flex lg:gap-5 lg:me-28 mx-16 mt-5`}
      >
        <button
          className={`text-lg border-2 rounded-full w-[35px] h-[35px] bg-[#e2e2e7]`}
          onClick={() => slider?.current?.slickPrev()}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className={`text-lg border-2 rounded-full w-[35px] h-[35px] bg-[#e2e2e7]`}
          onClick={() => slider?.current?.slickNext()}
        >
          <i className="fa-solid fa-arrow-right "></i>
        </button>
      </div>
      <div
        className={` h-[35vh] flex flex-col justify-center md:ms-0 rounded-lg overflow-x-hidden`}
      >
        <Slider ref={slider} {...settings}>
          {data.map((data) => (
            <Images
              key={data.id}
              {...data}
              cssClasses={`flex justify-center mt-5 size-24 rounded-lg object-cover`}
            />
          ))}
        </Slider>
        <hr className={`mt-6 border-[1.5px]`}></hr>
      </div>
    </>
  );
};
export default SliderImages;

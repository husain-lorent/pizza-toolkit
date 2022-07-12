import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import bannerSlider from "../api/banners.json";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
const Sales = () => {
  //////////////////////////Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  function NextBtn(props) {
    const { onClick } = props;
    return (
      <button
        className="text-brand-color absolute top-1/2 -right-7 -translate-y-1/2"
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowRight size={30} />
      </button>
    );
  }

  function PrevBtn(props) {
    const { onClick } = props;
    return (
      <button
        className="text-brand-color absolute top-1/2 -left-7 -translate-y-1/2"
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowLeft size={30} />
      </button>
    );
  }
  ////////////////////////////////////////////////////////////////
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    setBanners(bannerSlider);
  }, []);
  return (
    <div className="container mx-auto md:pt-8">
      <h3 className="font-semibold hidden md:block mb-3">Sale's</h3>
      <Slider {...settings} className="md:mx-2">
        {banners.length &&
          banners.map((banner, id) => (
            <div key={id}>
              <picture className="block md:px-1">
                <img className="md:rounded-lg " src={banner.image} />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Sales;

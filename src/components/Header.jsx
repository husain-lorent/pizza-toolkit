import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";
import {useWindowWidth} from '@react-hook/window-size'
import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/2.jpg"
import img3 from "../assets/images/3.jpg"
import img4 from "../assets/images/4.jpg"

const Header = () => {
  const windowWidth = useWindowWidth();
  const [selected, setSelected] = useState("US");
  const phones = {
    US: "+1",
    UZ: "+998",
    TR: "90",
    RU: "+7",
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
  };

  return (
    <div className="relative w-full overflow-hidden h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src={img1}
            />
          </div>
          <div>
            <img src={img2} />
          </div>

          <div>
            <img
              className="w-full h-[500px] object-cover"
              src={img3}
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src={img4}
            />
          </div>
        </Slider>
      )}
      <div className="md:container flex justify-center md:justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 h-full z-20 ">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/groceriesInMinutes-20f12c15098e8fd2bae874e2a40e343b.svg" />
          <h3 className="mt-5 text-3xl text-white font-semibold">
            At your door in <br />
            minutes
          </h3>
        </div>
        <div className="md:w-[400px] w-full md:rounded-lg bg-gray-50 p-3">
          <h4 className="text-primary-brand-color text-center font-semibold my-4">
            Login or register
          </h4>
          <div className="grid gap-y-2 mb-2">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative block">
                <input
                  required
                  className="peer flex-1 h-14 w-full px-4 border-2 border-gray-200 rounded transition-colors hover:border-primary-brand-color outline-none"
                />
                <span className="absolute top-3 text-xs left-0 h-full px-4 items-center peer-valid:top-1 transition-all text-gray-700">
                  Mobile Phone
                </span>
              </label>
            </div>
            <button className="bg-[#ffd300] text-sm font-semibold h-12 flex justify-center items-center rounded w-full text-brand-color hover:text-[#ffd300] hover:bg-brand-color">
              Continue with phone number
            </button>
            <hr className="h-[1px] bg-gray-300 my-2" />
            <button className="bg-blue-200 text-sm font-semibold h-12 flex justify-center items-center rounded w-full text-blue-900 hover:text-[#ffd300] hover:bg-brand-color">
              <span className="mr-4">Continue with Facebook</span>{" "}
              <FaFacebook size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

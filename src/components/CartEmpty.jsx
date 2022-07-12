import React from "react";
import { Link } from "react-router-dom";
import cartImg from "../assets/images/emptycart.png";
const CartEmpty = () => {
  return (
    <>
      <div className="w-full h-[60vh] grid justify-center mx-auto">
        <img className="h-[400px] w-[400px] object-cover" src={cartImg} />
        <Link
          className="text-center text-gray-900 font-medium text-3xl hover:text-black border-b"
          to="/"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";
import CartItems from "../components/CartItems";
import { clearCart } from "../redux/features/cartSlice";
import { BsFillCartCheckFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io'
const Cart = () => {
  const dispatch = useDispatch();
  const onClearCart = () => {
    if (window.confirm("Are you sure you want Clear cart?")) {
      dispatch(clearCart());
    }
  };

  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0); // pastda turishi muhim
  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <div className="grid gap-y-4 mx-auto container">
      <div className="flex justify-center items-center text-gray-900">
        <h2 className="px-2 text-2xl font-semibold">Cart</h2>

        <icon>
          <BsFillCartCheckFill size={26} />
        </icon>
      </div>

      {items.map((item) => (
        <CartItems {...item} key={item.id} />
      ))}
      <div className="flex justify-between pb-8 md:px-8">
        <div>
          <p className="text-gray-800 pb-8 pl-5 md:pl-0 font-semibold">
            total Pizzas {totalCount}
          </p>
          <Link className="bg-gray-400 flex ml-1 items-center text-white px-4 py-3 rounded-full hover:bg-slate-500" 
           to="/">
            <IoIosArrowBack size={22}/>  Back to Home
          </Link>
        </div>
       <div className="flex flex-col px-1">
       <p className="text-gray-900 font-semibold pb-8">total $ {totalPrice}</p>
       <p className="px-6 py-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 cursor-pointer">Pay Now</p>
       </div>
        <div className="md:mt-10 hidden md:block">
          <button
            onClick={onClearCart}
            className="flex items-center text-orange-50 bg-red-400 px-2 py-1 rounded hover:bg-red-500"
          >
            Clear Cart
            <i className="pl-2">
              <RiDeleteBin2Fill />
            </i>
          </button>
        </div>
      </div>
      <div className="md:mt-10 md:hidden flex justify-center pb-6 ">
          <button
            onClick={onClearCart}
            className="flex items-center justify-center w-[70vw] text-orange-50 bg-red-400 px-2 py-2 text-center rounded hover:bg-red-500"
          >
            Clear Cart
            <i className="pl-2">
              <RiDeleteBin2Fill />
            </i>
          </button>
        </div>
    </div>
  );
};

export default Cart;

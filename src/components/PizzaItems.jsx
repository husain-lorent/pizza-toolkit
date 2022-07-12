import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/features/cartSlice";

const typeNames = ["Normal", "Big"];
// const sizeNames = ["20", "30","40"];
const PizzaItems = ({ name, title, id, imageUrl, sizes, types, price }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  // const [countPizaa, setCountPizaa] = useState(0);
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };
  return (
    <div
      className="flex flex-col justify-center mx-auto md:hover:scale-105 cursor-pointer md:duration-75"
    >
      <img className="w-[240px]" src={imageUrl} alt={name} />
      <h4 className="text-black text-lg text-center py-1">{title}</h4>
      <div className="bg-yellow-300 grid gap-y-2 p-2 rounded">
        <ul className="grid grid-flow-col-dense cursor-pointer text-center">
          {types.map((type, id) => (
            <li
              onClick={() => setActiveType(type)}
              className={
                activeType === type
                  ? "bg-yellow-100 rounded inline-block text-center font-medium"
                  : ""
              }
              key={id}
            >
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul className="grid grid-flow-col-dense text-center cursor-pointer">
          {sizes.map((size, index) => (
            <li
              onClick={() => setActiveSize(index)}
              className={
                activeSize === index
                  ? "bg-yellow-100 rounded inline-block text-center font-medium"
                  : ""
              }
              key={index}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between mt-2 items-center">
        <p className="text-lg text-orange-500 font-semibold">{price} $</p>
        <button
          onClick={onClickAdd}
          className="hover:bg-orange-500 hover:text-white flex bg-white border border-[#e76f51] justify-center tracking-wide text-orange-500  w-[150px] py-2 rounded-lg"
        >
          <p className="font-bold items-center h-full">+ Add</p>
          {addedCount > 0 && (
            <p className="ml-2 bg-orange-400 text-white tracking-wider rounded-full h-6 text-xs w-6 text-center flex justify-center items-center">
              {addedCount}
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

export default PizzaItems;

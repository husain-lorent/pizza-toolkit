import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../redux/features/cartSlice";

const CartItems = ({ id, title, size, type, price, count, imageUrl }) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm("Are you sure you want to removeItem?")) {
      dispatch(removeItem(id));
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-2 items-center shadow md:shadow-sm p-2">
      <div className="w-[300px]">
        <div className="flex items-center">
          <img className="w-[120px] object-cover pr-1" src={imageUrl} alt={title} />
          <div>
            <h3 className="text-gray-900 font-semibold tracking-wider">
              {title}
            </h3>
            <p className="text-gray-700">
              {type}, {size} cm
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 flex items-center">
        <button
          className="w-9 h-9  items-center rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-700"
          disabled={count === 1}
          onClick={onClickMinus}
        >
          -
        </button>
        <b className="mx-3 ">{count}</b>
        <button className="w-9 h-9  items-center rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white" onClick={onClickPlus}>
          +
        </button>
      </div>
      <div>
        <p className="md:text-xl font-medium">{price} $</p>
      </div>
      <div className="px-8">
        <button className="px-4 py-1 rounded-full bg-red-400 text-white hover:bg-red-500" onClick={onClickRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItems;

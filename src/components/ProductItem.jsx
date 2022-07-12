import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const ProductItem = ({ product }) => {
  return (
    <div className="bg-white relative flex flex-col gap-y-1 items-center text-center text-sm font-semibold p-2">
      <button
        className="absolute top-1 right-1 w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-brand-color
      shadow hover:bg-gray-300"
      >
        <AiOutlinePlus size={16} />
      </button>
      <img src={product.image} alt={product.title} />
      <div className="text-brand-color">{product.title}</div>
      <div className="text-gray-900">{product.price}</div>
      <div className="text-gray-600">{product.alt}</div>
    </div>
  );
};

export default ProductItem;

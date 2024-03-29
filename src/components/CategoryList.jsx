import React from "react";

const CategoryList = ({ category: { title, id, image } }) => {
  return (
    <a className="flex flex-col group items-center cursor-pointer gap-y-2 text-center p-4 transition hover:bg-purple-50">
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded border border-gray-200  "
      />
      <span className="text-gray-700 whitespace-nowrap font-semibold text-sm group-hover:text-brand-color tracking-tight ">
        {title}
      </span>
    </a>
  );
};

export default CategoryList;

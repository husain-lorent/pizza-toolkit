import React, {  } from "react";

const Categories = ({value, onChangeCategory}) => {
    const categories = ['All', 'Meaty','Vegatarian','Grill','Sharp','Hot Dog']

  return (
    <div className="my-5 overflow-hidden">
      <ul className="flex gap-5 md:gap-12 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
      {categories.map((categoryName,index)=>(
        <li key={index}  className={value === index ? 'bg-gray-600 text-white px-6 py-2 rounded-full' : 'bg-slate-100 px-6 py-2 text-gray-700 rounded-full'}
         onClick={()=>onChangeCategory(index)}>{categoryName}</li>
      ))}
      </ul>
    </div>
  );
};

export default Categories;

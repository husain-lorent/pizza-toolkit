import React, { useEffect, useState } from "react";
import categoryData from "../api/categories.json";
import CategoryList from "./CategoryList";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categoryData);
  }, []);
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="grid 2xl:grid-cols-12 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-5 grid-cols-4">
          {categories &&
            categories.map((category, index) => (
              <CategoryList key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

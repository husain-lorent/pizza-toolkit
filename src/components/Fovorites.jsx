import React, { useEffect, useState } from "react";
import fovoriteData from "../api/fovorites.json";
import ProductItem from "./ProductItem";
const Fovorites = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(fovoriteData);
  }, []);
  return (
    <div className="mb-8">
      <h3 className="pl-1 font-semibold gap-[.50px] mb-3 pb-3">Fovorites</h3>
      <div className="grid grid-cols-3 lg:grid-cols-8 md:grid-cols-4  gap-1  rounded-lg overflow-hidden">
        {products.length &&
          products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Fovorites;

import React, { useEffect, useState } from "react";
import cartData from "../api/cardData.json";
const Carts = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(cartData);
  }, []);
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 px-3 md:p-0 gap-4">
      {cards.length &&
        cards.map((card,id) => (
          <div className="bg-white p-10 rounded-lg shadow flex flex-col items-center  text-center" key={card.id}>
            <img
              className="w-[140px] h-[140px] mb-6"
              src={card.image}
              alt={card.title}
            />
            <h6 className="font-semibold text-lg text-primary-brand-color">
              {card.title}
            </h6>
            <p className="text-sm text-gray-800 mt-2">{card.description}</p>
          </div>
        ))}
    </section>
  );
};

export default Carts;

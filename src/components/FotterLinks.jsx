import React, { useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
import { IoIosArrowDown } from "react-icons/io";
const FotterLinks = ({ title, items }) => {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(true);
  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };
  useEffect(() => {
    if (isOpen && windowWidth <= 760) {
      setIsOpen(false);
    }
    if (!isOpen && windowWidth > 760) {
      setIsOpen(true);
    }
  }, [windowWidth]);
  return (
    <section>
      <div className="grid gap-y-1 md:gap-y-4">
        <h6
          onClick={toggleCollapse}
          className="text-lg text-primary-brand-color flex items-center"
        >
          {title}
          <button className="md:hidden ml-8 text-primary-brand-color rounded w-6 bg-secondary-brand-color h-6 bg-opacity-10 grid place-items-center">
            <span
              className={`transition-all transform ${
                isOpen ? "-rotate-180" : ""
              }`}
            >
              <IoIosArrowDown size={16} />
            </span>
          </button>
        </h6>
      </div>
      <Collapse isOpened={isOpen}>
        <div>
          <ul className="grid gap-y-1 md:gap-y-2">
            {items.map((item, key) => (
              <li key={key}>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-brand-color"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
    </section>
  );
};

export default FotterLinks;

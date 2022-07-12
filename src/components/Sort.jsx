import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../redux/features/filterSlice";
import {IoIosArrowDown} from 'react-icons/io'
export const list = [
  { name: "Popular(DESC)", sortProperty: "rating" },
  { name: "Popular(ASC)", sortProperty: "-rating" },
  { name: "By Price (DESC)", sortProperty: "price" },
  { name: "By Price  (ASC)", sortProperty: "-price" },
  { name: "A-Z (DESC)", sortProperty: "title" },
  { name: "A-Z (ASC)", sortProperty: "-title" },
];

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const [open, setOpen] = useState(false);

  const sortRef = useRef();

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);

    };
  }, []);

  return (
    <div ref={sortRef} className="relative">
      <div className="flex p-5">
        <p className="flex justify-center items-center gap-2">Sort  <IoIosArrowDown size={16} /></p>
        <span className="cursor-pointer text-orange-500 px-1 border-b-[1px] border-orange-400" onClick={() => setOpen(!open)}>
       {sort.name}
        </span>
      </div>
      
      {open && (
        <div className="absolute z-50 p-2 items-center  bg-black text-white bg-opacity-90 rounded w-full">
          <ul className="cursor-pointer ">
            {list.map((obj, index) => (
              <li
                className={
                  sort.sortProperty === obj.sortProperty
                    ? " text-blue-400 p-1"
                    : " p-1"
                }
                key={index}
                onClick={() => onClickListItem(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

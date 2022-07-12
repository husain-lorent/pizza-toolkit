import debounce from "lodash.debounce";
import React, { useCallback, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../redux/features/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );
  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        className="w-[70vw] md:w-[400px] pl-8 outline-none bg-slate-50 border-gray-200 border-[1px] p-2 rounded"
        onChange={onChangeInput}
        placeholder="Search..."
        value={value}
      />

      <span className="absolute left-2 opacity-30 top-3">
        <BsSearch size={20} />
      </span>
      {value && (
        <span
          onClick={onClickClear}
          className="absolute right-2 opacity-90 top-3 cursor-pointer"
        >
          <MdClear size={22} />
        </span>
      )}
    </div>
  );
};

export default Search;

import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Search from "../components/Search";
import { RiShoppingBasketFill } from "react-icons/ri";
import logo from "../assets/images/logo.png";
const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const location = useLocation();
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);
  return (
    <header>
      <div className="bg-[#3f2c03] md:px-5 h-[62px] flex justify-between items-center w-full mx-auto">
        <Link to="/">
          <img className="h-[70px] w-full object-cover" src={logo} />
        </Link>
        <div className="md:hidden flex">
            <Link
              to="/cart"
              className="flex items-center bg-orange-500 text-orange-50 p-2 rounded-2xl"
            >
              <span className="px-2">{totalPrice} $</span>
              <span className="flex px-2">
                <RiShoppingBasketFill size={24} /> {totalCount}
              </span>
            </Link>
          </div>
      </div>
      <div
        className="flex justify-center md:justify-between container items-center mx-auto py-3"
      >
        <div></div>
        {location.pathname !== "/cart" && <Search />}
        {location.pathname === "/" && (
          <div className="hidden md:inline-block">
            <Link
              to="/cart"
              className="flex items-center bg-orange-500 text-orange-50 p-2 rounded-2xl"
            >
              <span className="px-2">{totalPrice} $</span> {" "}
              <span className="flex px-2">
                <RiShoppingBasketFill size={24} /> {totalCount}
              </span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React, { useCallback, useEffect } from "react";

import { selectCateoryId, setCurrentPage } from "../redux/features/filterSlice";
import SkeletonLoad from "../components/Blocks/Skeleteon";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import PizzaItems from "../components/PizzaItems";
import Sort from "../components/Sort";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchPizzas } from "../redux/features/pizzaSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state) => state.filter
  );
  const { items, status } = useSelector((state) => state.pizza);
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  const location = useLocation();
  const onChangeCategory = useCallback((id) => {
    //tekrar olusturmaz
    dispatch(selectCateoryId(id));
  }, []);

  const getPizzas = async () => {
    // setIsLoading(true);
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage,
      })
    );
  };

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaItems key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <SkeletonLoad key={index} />
  ));
  return (
    <section className="h-screen container mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center px-0 md:px-14">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-4 gap-3 mx-auto">
        {status === "error" ? (
          <div className="font-bold tex-4xl text-red-500">Error</div>
        ) : status === "loading" ? (
          skeletons
        ) : (
          pizzas
        )}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </section>
  );
};

export default Home;

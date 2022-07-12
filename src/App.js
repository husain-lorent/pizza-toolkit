import React from "react";
import Carts from "./components/Carts";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Fovorites from "./components/Fovorites";
import Header from "./components/Header";
import MobileApp from "./components/MobileApp";
import Navbar from "./components/Navbar";
import Sales from "./components/Sales";
import { useWindowWidth } from "@react-hook/window-size";
const App = () => {
  const windowWidth = useWindowWidth();
  return (
    <div>
      <Navbar />
      {windowWidth <= 768 && <Sales />}
      <Header />
      <Categories />
      {windowWidth > 768 && <Sales />}
      <div className="container mx-auto grid gap-y-6 pt-8">
        <Fovorites />
        <MobileApp />
        <Carts />
      </div>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Header from "./header";
import Banner from "./banner";
import Footer from "./footer";
import Category from "./category";
import Products from "./products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Category />
    </div>
  );
};

export default Home;

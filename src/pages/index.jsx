import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Products from "../components/Products/Products";
import About from "../components/About/About";
import Process from "../components/Process/Process";
import ReviewSystem from "../components/ReviewSystem/ReviewSystem";

const IndexPage = ({ onAddToCart, useProducts, loading }) => {
  return (
    <>
      <Hero />
      <Features />

      <Products onAddToCart={onAddToCart} useProducts={useProducts} loading={loading} />
      <About />
      <Process />
      <ReviewSystem />
    </>
  );
};

export default IndexPage;

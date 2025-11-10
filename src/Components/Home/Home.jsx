import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

import Values from "../values/Values";
import Category from "../Category/Category";
import Products from "../Products/Products";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
    </>
  );
}

export default Home;

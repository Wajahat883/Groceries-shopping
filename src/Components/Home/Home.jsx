import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

import Values from "../values/Values";
import Category from "../Category/Category";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Values />
    </>
  );
}

export default Home;

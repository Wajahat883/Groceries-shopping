import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

import Values from "../values/Values";
import Category from "../Category/Category";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Process from "../Process/Process";
import Testimonial from "../Testimonials/Testimonial";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;

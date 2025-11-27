import React from "react";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";

import Values from "./Sections/Values";
import Category from "./Sections/Category";
import Products from "./Sections/Products";
import Discount from "./Sections/Discount";
import Process from "./Sections/Process";
import Testimonial from "./Sections/Testimonial";
import Footer from "./Sections/Footer";

function LandingPage() {
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

export default LandingPage;

import React from "react";
import Grocery from "../../../assets/Grocery.png";
import Button from "../../../Components/Button/Button";

function Hero() {
  return (
    <section className="w-full bg-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20 gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-left py-20">
          <span className="bg-green-700 text-white text-sm sm:text-base md:text-lg lg:text-2xl px-4 py-2 rounded-full inline-block">
            Export Best Quality......
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-6 leading-tight">
            Tasty Organic <span className="text-orange-400">Fruits</span> &{" "}
            <span className="text-green-600">Veggies</span> In Your City
          </h1>

          <p className="font-medium text-zinc-600 text-base sm:text-lg md:text-xl py-6 max-w-[600px] mx-auto lg:mx-0">
            Bred for a high content of beneficial substances. Our products are
            always fresh, healthy, and naturally grown.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button content="Shop Now" />
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src={Grocery}
            alt="grocery"
            className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[90%] xl:w-[85%] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";
import Heading from "../Heading/Heading";
import { category } from "./CategoryData";
import Button from "../Button/Button";

function Category() {
  const renderCards = category.map((card, index) => (
    <div
      key={index}
      className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={card.image}
        alt={card.title}
        className="rounded-t-2xl w-full h-60 object-cover"
      />
      <div className="bg-zinc-100 pt-7 p-6 rounded-b-2xl flex flex-col justify-between flex-grow">
        <h1 className="font-bold text-lg mb-2">{card.title}</h1>
        <p className="font-semibold text-zinc-600 mb-4">{card.description}</p>
        <Button content="See All" />
      </div>
    </div>
  ));

  return (
    <section className="py-20 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto px-30">
        <Heading highlight="Shop" heading="Category!" />
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-4 
            gap-8 
            mt-10
            w-[1400px]
          "
        >
          {renderCards}
        </div>
      </div>
    </section>
  );
}

export default Category;

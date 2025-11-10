import React, { useState } from "react";
import Heading from "../Heading/Heading";
import { ProductList } from "./ProductList";
import Cards from "../Cards/Cards";

function Products() {
  const category = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTabs, setActiveTabs] = useState("All");

  const renderCards = ProductList.map((product) => {
    return (
      <Cards
        key={product.id}
        image={product.image}
        title={product.name}
        price={product.price}
      />
    );
  });

  return (
    <>
      <section>
        <div className="max-w-[1400px] mx-auto px-10 py-20">
          <Heading highlight="Our" heading="Product" />
          <div className="flex gap-3  justify-center mt-10 ">
            {category.map((categories) => (
              <button
                key={categories}
                className={` px-5
                     py-2 text-lg font-semibold rounded-xl cursor-pointer ${
                       activeTabs === categories
                         ? "bg-orange-500 text-white bg-gradient-to-b from-orange-500 to-orange-500 "
                         : "bg-zinc-200"
                     } `}
                onClick={() => setActiveTabs(categories)}
              >
                {categories}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-9 mt-20">{renderCards}</div>
        </div>
      </section>
    </>
  );
}

export default Products;

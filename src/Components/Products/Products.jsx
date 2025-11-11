import React, { useState } from "react";
import Heading from "../Heading/Heading";
import { ProductList } from "./ProductList";
import Cards from "../Cards/Cards";
import Button from "../Button/Button";

function Products() {
  const category = ["All", "Fruits", "Dairy", "SeaFood", "Vegetables"];
  const [activeTabs, setActiveTabs] = useState("All");
  console.log("activetab: ", activeTabs);

  const filterItem =
    activeTabs === "All"
      ? ProductList
      : ProductList.filter((item) => item.category === activeTabs);

  const renderCards = filterItem.slice(0, 8).map((product) => {
    return (
      <Cards
        key={product.id}
        image={product.image}
        name={product.name}
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
          <div className=" mt-15 mx-auto w-fit">
            <Button content="View All" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;

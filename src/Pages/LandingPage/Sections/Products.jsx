import React, { useState } from "react";
import Heading from "../../../Components/Heading/Heading";
import { ProductList } from "../../../Constants/ProductList";
import Cards from "../../../Components/Cards/Cards";
import { Link } from "react-router-dom";

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
            <Link
              to="/allproducts"
              className="bg-gradient-to-b bg-orange-400  hover:from-orange-500
       rounded-2xl text-lg text-white px-8 py-3 hover:scale-105 hover:to-orange-300 transition-all duration-300 cursor-pointer"
            >
              View All
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;

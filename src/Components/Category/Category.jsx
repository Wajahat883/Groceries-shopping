import React from "react";

function Category() {
  return (
    <>
      <section>
        <div className="py-20">
          <div className="w-fit mx-auto ">
            <h2 className="md:text-5xl text-[2.5rem] font-bold ">
              <span className="text-green-600"> Shop</span> By{" "}
              <span className="text-orange-500"> Category!</span>
            </h2>
            <div className="w-42 h-1 bg-orange-500 mt-3 md:mt-6 ml-auto "></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;

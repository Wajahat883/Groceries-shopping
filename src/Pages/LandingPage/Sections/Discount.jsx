import React from "react";
import Button from "../../../Components/Button/Button";
import Discounts from "../../../assets/fresh.png";

function Discount() {
  return (
    <>
      <section
        className="bg-zinc-100 py-10"
        style={{
          backgroundImage: `url(${Discounts})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "contain",
          backgroundOrigin: "content-box",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-10 flex items-center gap-8">
          <span className="text-9xl text-orange-500 font-bold transform -rotate-90 h-fit">
            20%
          </span>
          <div className="max-w-[700px] pr-8">
            <h3 className="text-7xl text-orange-600 font-bold">
              First Order Discount
            </h3>
            <p className="text-zinc-600 my-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              cum delectus accusantium commodi dolorem illo porro quo laudantium
              minus. Natus suscipit voluptatibus eaque accusantium architecto
              eveniet aperiam quod exercitationem cupiditate?
            </p>
            <Button content="Get a Discount" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Discount;

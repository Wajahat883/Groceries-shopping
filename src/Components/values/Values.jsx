import React from "react";
import Heading from "../Heading/Heading";
import { ValueData } from "./ValueData.jsx";
import MidF from "../../assets/MidF.jpg";
import Saftey from "../../assets/Saftey.jpg";

function Values() {
  const leftValues = ValueData.slice(0, 2).map((item, index) => {
    return (
      <div key={index} className="flex items-center gap-4 flex-row mb-6">
        <div className="flex justify-center items-center text-2xl text-white bg-gradient-to-b from-green-700 to-green-700 w-16 h-16 rounded-full shadow-md">
          <span>{item.icon}</span>
        </div>
        <div className="text-left">
          <h3 className="text-zinc-800 text-2xl font-bold">{item.title}</h3>
          <p className="text-zinc-500 text-base font-semibold truncate-1/2">
            {item.para}
          </p>
        </div>
      </div>
    );
  });

  const rightValues = ValueData.slice(2).map((item, index) => {
    return (
      <div key={index} className="flex items-center gap-4 flex-row mb-6">
        <div className="flex justify-center items-center text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-400 w-16 h-16 rounded-full shadow-md">
          <span>{item.icon}</span>
        </div>
        <div>
          <h3 className="text-zinc-800 text-2xl font-bold">{item.title}</h3>
          <p className="text-zinc-500 text-base font-semibold">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="py-16">
      <div className="max-w-[1490px] mx-auto px-10">
        <Heading highlight="Our" heading="Value" />
        <div className="flex justify-between items-center flex-wrap gap-10 py-20">
          <div className="flex flex-col gap-6">{leftValues}</div>

          <div className="w-[350px] h-[350px] overflow-hidden  rounded-full shadow-lg ">
            <img
              src={MidF}
              alt="Middle Feature"
              className="w-full h-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-6py-10">{rightValues}</div>
          <div className="w-[350px] h-[350px] overflow-hidden  rounded-full shadow-lg ">
            <img
              src={Saftey}
              alt="Middle Feature"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;

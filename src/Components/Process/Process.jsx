import React from "react";
import Heading from "../Heading/Heading";
import { List } from "./ProcessList";

function Process() {
  const renderSteps = List.map((item) => (
    <>
      <div
        key={item.id}
        className={`flex-1 ${item.id % 2 === 0 ? "-mt-100" : ""}`}
      >
        <span className=" flex mx-auto rounded-full justify-center items-center text-white w-18 h-18 text-8xl bg-zinc-800 outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed">
          {item.number}
        </span>
        <div className="flex items-center gap-x-5 mt-10 ">
          <span className="flex bg-gradient-to-b bg-orange-500 text-white justify-center rounded-full items-center text-3xl w-15 h-15 ">
            {item.icon}
          </span>
        </div>
        <div className="flex-1">
          <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    </>
  ));
  return (
    <>
      <section>
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="w-fit mr-auto p-10 mt-20">
            <Heading highlight="Our" heading="Process" />
          </div>
          <div className="flex mt-20 justify-center  items-center pt-50">
            {renderSteps}
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;

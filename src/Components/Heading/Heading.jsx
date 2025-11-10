import React from "react";

function Heading(props) {
  return (
    <>
      <div className="w-fit mx-auto ">
        <h2 className="md:text-5xl text-[2.5rem] font-bold ">
          <span className="text-green-600"> {props.highlight}</span>
          <span className="text-orange-500"> {props.heading}</span>
        </h2>
        <div className="w-34 h-1 bg-orange-500 mt-3 md:mt-6 ml-auto "></div>
      </div>
    </>
  );
}

export default Heading;

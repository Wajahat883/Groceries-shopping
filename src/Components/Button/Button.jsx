import React from "react";

function Button(props) {
  return (
    <>
      <button
        className="bg-gradient-to-b bg-orange-400  hover:from-orange-500
       rounded-2xl text-lg text-white px-8 py-3 hover:scale-105 hover:to-orange-300 transition-all duration-300 cursor-pointer"
      >
        {props.content}
      </button>
    </>
  );
}

export default Button;

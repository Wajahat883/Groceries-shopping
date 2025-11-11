import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

function Cards({ image, name, price }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="flex justify-between items-center mb-3">
        <button className="text-gray-400 hover:text-red-500 text-xl transition">
          <FaHeart />
        </button>
        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white p-2 rounded-lg hover:from-orange-500 hover:to-orange-600 transition">
          <FaPlus />
        </button>
      </div>

      <div className="w-full h-56 rounded-xl overflow-hidden">
        <img src={image} className="w-full h-full object-cover" />
      </div>

      <div className="text-center mt-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-orange-500 font-medium text-base">Rs {price}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
}

export default Cards;

import React from "react";
import { Fruite } from "../../Constants/FruitesData";

function Fruites() {
  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {Fruite.map((fruit) => (
        <div
          key={fruit.id}
          className="bg-white shadow-lg rounded-lg p-5 w-110 text-center hover:scale-105 transform transition duration-300"
        >
          <img
            src={fruit.image}
            alt={fruit.name}
            className="w-120 h-90 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold">{fruit.name}</h2>
          <p className="text-gray-600 mt-1 mb-4">Price: {fruit.price}</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Fruites;

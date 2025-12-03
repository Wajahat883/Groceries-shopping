import React from "react";
import { Fruite } from "../../Constants/FruitesData";
import Button from "../Button/Button";

function Fruites() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        Fresh Fruits - Stay Healthy!
      </h1>
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
            <Button content="Add to Cart" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fruites;

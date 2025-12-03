import React from "react";
import { DairyData } from "../../Constants/DairyData";
import Button from "../Button/Button";
function Dairy() {
  return (
    <>
      <div className="p-6">
        <h1 className=" text-3xl font-bold text-center text-orange-500">
          Fresh Dairy-Milk & Eggs - Stay Healthy!
        </h1>
        <div className="flex flex-wrap gap-6 p-6 justify-center">
          {DairyData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-5 w-110  text-center hover:scale-105 transform transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-120 h-90 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-500 mt-1 mb-4">{item.description}</p>
              <p className="text-gray-600 mt-1 mb-4">Price: {item.price}</p>
              <Button content="Add to Cart" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dairy;

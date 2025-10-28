import React from "react";
import { FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-[1200px] mx-auto h-[14vh] flex justify-between items-center px-8">
        <a href="#" className="text-3xl font-bold text-gray-800">
          Gr<span className="text-green-700">O</span>cify
        </a>

        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#"
              className="font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-gray-600 hover:text-green-700 transition-colors duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-gray-600 hover:text-green-700 transition-colors duration-200"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-gray-600 hover:text-green-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="flex justify-center items-center gap-x-4">
          <a href="#" className="text-zinc-500 text-2xl">
            <FaHeart />
          </a>
          <a href="#" className="text-zinc-500 text-2xl ">
            <GiShoppingBag />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

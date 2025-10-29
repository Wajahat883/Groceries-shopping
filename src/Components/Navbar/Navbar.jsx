import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { LuSearch } from "react-icons/lu";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 right-0 left-0 z-50">
      <nav className="max-w-[1400px] mx-auto flex md:flex-row md:justify-between md:items-center items-center justify-between px-5 md:px-10 py-5 md:py-7 gap-10 md:gap-0">
        <a
          href="#"
          className="text-3xl font-bold text-gray-800 text-center md:text-left"
        >
          Gr<span className="text-green-700">O</span>cify
        </a>

        <ul className="md:flex hidden items-center gap-8">
          <li>
            <a
              href="#"
              className="font-bold text-lg text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-bold text-lg text-gray-600 hover:text-green-700 transition-colors duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-bold text-lg text-gray-600 hover:text-green-700 transition-colors duration-200"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-bold text-lg text-gray-600 hover:text-green-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="flex justify-center items-center gap-3 md:gap-x-4">
          <div className="flex p-1 border-2 border-green-700 rounded-4xl w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 h-[40px] px-3 outline-none"
            />
            <button className="text-white bg-green-700 w-10 h-10 flex justify-center items-center rounded-3xl">
              <LuSearch />
            </button>
          </div>

          <div className="flex justify-center gap-4 text-2xl text-zinc-500">
            <a href="#">
              <FaHeart />
            </a>
            <a href="#">
              <GiShoppingBag />
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-zinc-800 text-3xl md:hidden"
            >
              {menuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          className={`flex md:hidden w-[330px] h-[350px]  rounded-xl  absolute gap-y-12 top-30 left-1/2 transform -translate-x-1/2 flex-col backdrop-blur-xl items-center  py-5   bg-orange-200/70 transition-all duration-500 ${
            menuOpen ? "left-1/2" : ""
          }`}
        >
          <li>
            <a
              href="#"
              className="font-bold text-lg text-orange-500  hover:text-orange-600 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-bold text-lg text-gray-600 hover:text-green-700 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-bold text-lg text-gray-600 hover:text-green-700 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-bold text-lg text-gray-600 hover:text-green-700 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;

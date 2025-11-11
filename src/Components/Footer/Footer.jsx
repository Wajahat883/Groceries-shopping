import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <>
      <footer className="bg-zinc-100 py-20">
        <div className="max-w-[1400px] px-10 mx-auto flex flex-wrap">
          <div className="flex-1  basis-[300px]">
            <a
              href="#"
              className="text-3xl font-bold text-gray-800 text-center md:text-left"
            >
              Gr<span className="text-green-700">O</span>cify
            </a>
            <p className="text-zinc-600 mt-6 max-w-[350px]">
              Bred for a high content of benifical substances.our products are
              all fresh and healthy.
            </p>
            <p className="text-zinc-800 mt-6">
              2025 &Copy; All Rights Reserved
            </p>
          </div>
          <ul className="flex-1">
            <li>
              <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                About us
              </a>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                FAQ
              </a>
            </li>
          </ul>

          <ul className="flex-1">
            <li>
              <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                Support Center
              </a>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                FeedBack
              </a>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                Contact us
              </a>
            </li>
          </ul>
          <div>
            <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
            <p className="mt-6 text-zinc-600">
              Questions or Feebacks?
              <br />
              we'd love to hear from you.
            </p>
            <div className="flex p-1 rounded-lg mt-6  bg-white ">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Email Address"
                className="h-[5vh] pl-4 flex-1 focus:outline-none"
              />
              <button className="bg-gradient-to-b bg-orange-400  hover:from-orange-500 p-2 rounded-lg text-white text-2xl cursor-pointer">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

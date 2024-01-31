"use client";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full md:flex-row md:flex-nowrap md:justify-between flex items-center z-40">
        <div
          className={`w-full flex flex-row justify-between text-white/40 transition-all duration-150 font-normal uppercase text-lg mx-auto px-4 py-4 ${
            isMenuOpen ? "hidden md:flex" : "md:flex hidden"
          }`}
        >
          <div className="px-4 my-2 mr-8 cursor-pointer hover:scale-105 transition-all duration-200  hover:text-white">
            <a href="/" className="">
              Home
            </a>
          </div>
          <ul className="flex flex-row items-right">
            <li className="px-4 my-2 cursor-pointer hover:scale-105 transition-all duration-200  hover:text-white">
              <a href="/project" className="">
                Workshop
              </a>
            </li>
            <li className="px-4 my-2 cursor-pointer hover:scale-105 transition-all duration-200  hover:text-white">
              <a href="/about" className="">
                Who are we?
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:hidden">
          <div className="flex flex-row items-center justify-end">
            <div className="flex-row justify-between align-middle items-center">
              <a
                href="/project"
                className="uppercase text-xl text-white bg-black px-4 py-3"
              >
                Workshop
              </a>
            </div>
            <button
              onClick={toggleMenu}
              className="focus:outline-none p-2 rounded-md transition-all duration-200"
            >
              {isMenuOpen ? (
                <FaTimes className="text-5xl font-bold p-2 bg-black" />
              ) : (
                <AiOutlineMenu className="text-5xl font-bold p-2 bg-black" />
              )}
            </button>
          </div>
          {isMenuOpen && (
            <div className="absolute right-0 top-22 h-screen w-full">
              <div className="absolute text-gray-200 py-2 px-4">
                <ul className="grid grid-row-2 gap-4 items-end justify-end uppercase font-bold text-xl">
                  <li className="text-sm bg-black cursor-pointer px-2 py-4 mx-2 mb-4 text-center transition-all duration-200">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-sm bg-black cursor-pointer px-2 py-4 mx-2 mb-4 text-center transition-all duration-200">
                    <a href="/about">Who are we?</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

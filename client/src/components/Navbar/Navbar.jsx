import { useState } from "react";
import React from "react";
import bgimage from "./images/background1.jpg";
import logo from "./images/logosynodic.png";
// import { IoMenu } from "react-icons/io5";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full absolute z-10">
      <nav className="mt-5 flex items-center justify-evenly h-[5rem] relative px-2">
        {/* Logo (always on the left) */}
        <div className=" flex justify-start items-center">
          <a href="/">
            <img
              src={logo}
              className="h-[6rem] lg:h-20 w-full object-contain"
              alt="Logo"
            />
          </a>
        </div>

        {/* Navigation links (responsive for tablets and above) */}
        <div className="hidden md:flex  text-white font-extrabold">
          <ul className="flex gap-6 lg:gap-16">
            <li>
              <a
                href="/"
                className="text-white font-bold text-lg lg:text-xl hover:text-blue-400 relative group"
              >
                Home
                {/* <span className="block h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span> */}
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="text-white font-bold text-lg lg:text-xl hover:text-blue-400 relative group"
              >
                About us
                {/* <span className="block h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span> */}
              </a>
            </li>
            <li>
              <a
                href="/Projects"
                className="text-white font-bold text-lg lg:text-xl hover:text-blue-400 relative group"
              >
                Projects
                {/* <span className="block h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span> */}
              </a>
            </li>
            <li>
              <a
                href="/Community"
                className="text-white font-bold text-lg lg:text-xl hover:text-blue-400 relative group"
              >
                Community
                {/* <span className="block h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span> */}
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="text-white font-bold text-lg lg:text-xl hover:text-blue-400 relative group"
              >
                Shop
                {/* <span className="block h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span> */}
              </a>
            </li>
            <li>
              <a
                href="/Careers"
                className="text-white font-bold text-lg lg:text-xl hover:text-blue-400 relative group"
              >
                Careers
                {/* <span className="block h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span> */}
              </a>
            </li>
            <li>
              <a
                href="Contact"
                className="text-white font-bold text-lg lg:text-xl hover:text-blue-400 relative group"
              >
                Contact us
                {/* <span className="block h-1 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span> */}
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Menu icon (visible only on small screens) */}
        <div className="md:hidden flex items-center justify-end w-full mr-2">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <IoClose size={35} /> : <IoMenu size={35} />}
          </button>
        </div>

        {/* Mobile menu (only shown when the menu icon is clicked) */}
        {isMenuOpen && (
          <div className="absolute top-[4rem] right-0  h-[100vh] w-full bg-gray-900 text-white p-6 transition-all duration-300 ease-in-out md:hidden">
            <ul className="flex flex-col mt-4 gap-5 items-center">
              <li>
                <a
                  href="/"
                  className="text-white font-bold text-xl hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className="text-white font-bold text-xl hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/Projects"
                  className="text-white font-bold text-xl hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/Community"
                  className="text-white font-bold text-xl hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="/Shop"
                  className="text-white font-bold text-xl hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/Careers"
                  className="text-white font-bold text-xl hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/Contact"
                  className="text-white font-bold text-xl hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;

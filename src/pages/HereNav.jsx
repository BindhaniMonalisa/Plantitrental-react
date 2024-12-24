import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";

const HereNav = () => {
  const [menu, setMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition duration-300 ${
        isScrolled ? "bg-white text-gray-900 shadow-md shadow-gray-500/60  " : "bg-white text-gray-900 shadow-md shadow-gray-500/60 "
      }`}
    >
      <nav className="container mx-auto flex justify-evenly items-center py-3 px-6">
        {/* Logo Section */}
        <div className="flex items-center px-2">
          <img src={Logo} alt="logo" className="w-full h-16" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-7">
          <Link
            to="/"
            className="px-4 py-2 text-sm bg-white text-gray-900 shadow-sm ring-1 ring-secondary hover:bg-gray-200 hover:text-blue-600 transition duration-200 ease-in-out"
          >
            Home
          </Link>
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center px-4 py-2 text-sm bg-white text-gray-900 shadow-sm ring-1 ring-secondary hover:bg-gray-200 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              Rental Items
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-20">
                <Link
                  to="/bouncehousefaq"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-500 transition duration-200 ease-in-out"
                >
                  Bounce Houses
                </Link>
                {/* Repeat similar links for all dropdown items */}
                <Link
                  to="/item2"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-500 transition duration-200 ease-in-out"
                >
                  Concessions Machines
                </Link>
                <Link
                  to="/item3"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-500 transition duration-200 ease-in-out"
                >
                  Equipment
                </Link>
                <Link
                  to="/item3"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-500 transition duration-200 ease-in-out"
                >
                  Food And Beverage
                </Link>
                <Link
                  to="/item3"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-500 transition duration-200 ease-in-out"
                >
                  Games And Activities
                </Link>
                <Link
                  to="/item3"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-500 transition duration-200 ease-in-out"
                >
                  Movies Screens
                </Link>
                <Link
                  to="/item3"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-500 transition duration-200 ease-in-out"
                >
                  Sound Systems
                </Link>
                <Link
                  to="/item3"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-500 transition duration-200 ease-in-out"
                >
                  Water Toys
                </Link>
                <Link
                  to="/item3"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-500 transition duration-200 ease-in-out"
                >
                  Wedding
                </Link>
                <Link
                  to="/item3"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-500 transition duration-200 ease-in-out"
                >
                  Winter
                </Link>
                {/* Add other items similarly */}
              </div>
            )}
          </div>
          <Link
            to="/policie"
            className="px-4 py-2 text-sm bg-white text-gray-900 shadow-sm ring-1 ring-secondary hover:bg-gray-200 hover:text-blue-600 transition duration-200 ease-in-out"
          >
            Policies
          </Link>
          <Link
            to="/holidayinfo"
            className="px-4 py-2 text-sm bg-white text-gray-900 shadow-sm ring-1 ring-secondary hover:bg-gray-200 hover:text-blue-600 transition duration-200 ease-in-out"
          >
            Holiday Info
          </Link>
          <Link
            to="/contacts"
            className="px-4 py-2 text-sm bg-white text-gray-900 shadow-sm ring-1 ring-secondary hover:bg-gray-200 hover:text-blue-600 transition duration-200 ease-in-out"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} className="cursor-pointer" />
          ) : (
            <FiAlignJustify size={25} onClick={handleChange} className="cursor-pointer" />
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden absolute bg-white w-full z-10 flex flex-col items-center py-4 gap-4 transition-transform duration-300`}
      >
        <Link
          to="/"
          className="text-gray-900 hover:text-blue-500 transition duration-200 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/items"
          className="text-gray-900 hover:text-blue-500 transition duration-200 ease-in-out"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Rental Items
        </Link>
        {isDropdownOpen && (
          <div className="absolute mt-2 bg-white w-full flex flex-col items-start pl-6">
            <Link
              to="bouncehousefaq"
              className="block py-2 text-gray-900 hover:text-blue-500 transition duration-200 ease-in-out"
            >
              Bounce Houses
            </Link>
            <Link
              to="/item2"
              className="block py-2 text-gray-900 hover:text-blue-500 transition duration-200 ease-in-out"
            >
              Concessions
            </Link>
            <Link
              to="/item3"
              className="block py-2 text-gray-900 hover:text-blue-500 transition duration-200 ease-in-out"
            >
              Equipment
            </Link>
          </div>
        )}
        <Link
          to="/policie"
          className="text-gray-900 hover:text-blue-500 transition duration-200 ease-in-out"
        >
          Policeis
        </Link>
        <Link
          to="/holidayinfo"
          className="text-gray-900 hover:text-blue-500 transition duration-200 ease-in-out"
        >
          Holiday Info
        </Link>
        <Link
          to="/contacts"
          className="text-gray-900 hover:text-blue-500 transition duration-200 ease-in-out"
        >
          Contact
        </Link>
      </div>
       {/* Call Info */}
       <div className="text-blue-900 flex flex-row justify-end py-2 pr-9 gap-2 text-[18px]">
          <span>Reserve Online! or Call/Text </span>
          <span className="font-semibold">(801) 319-5524</span>
        </div>
    </header>
  );
};

export default HereNav;

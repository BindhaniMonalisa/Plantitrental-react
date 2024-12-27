import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const HereNav = () => {
  const [menu, setMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
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
    <>
      <header
        className={`fixed w-full z-10 transition duration-300 ${
          isScrolled
            ? "bg-white text-gray-900 shadow-md shadow-gray-500/60"
            : "bg-white text-gray-900 shadow-md shadow-gray-500/60"
        }`}
      >
        <div className="flex flex-row">
        <nav className="container mx-auto flex justify-evenly items-center py-3 px-6">
          {/* Logo Section */}
          <div className="flex items-center px-2">
            <img src={Logo} alt="logo" className="w-full h-16" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-7">
            <Link
              to="/home2"
              className="px-4 py-2 text-sm bg-white text-gray-900 shadow-sm ring-1 ring-secondary hover:bg-gray-200 hover:text-blurry transition duration-200 ease-in-out"
            >
              Home
            </Link>
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center px-4 py-2 text-sm bg-white text-gray-900 shadow-sm ring-1 ring-secondary hover:bg-gray-200 hover:text-blurry transition duration-200 ease-in-out"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white  border rounded shadow-lg z-20">
                  <div className="flex justify-between items-center px-4 py-2">
                    <span className="text-gray-900 font-bold">Menu</span>
                    <AiOutlineClose
                      size={18}
                      className="cursor-pointer"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                  </div>
                  <Link
                    to="/bounsehouse2"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blurry hover:underline transition duration-200 ease-in-out"
                  >
                    Bounce Houses
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blurry hover:underline transition duration-200 ease-in-out"
                  >
                    Concessions Machines
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blurry hover:underline transition duration-200 ease-in-out"
                  >
                    Equipment
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blurry hover:underline transition duration-200 ease-in-out"
                  >
                    Food And Beverage
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blurry hover:underline transition duration-200 ease-in-out"
                  >
                    Games And Activities
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blurry hover:underline transition duration-200 ease-in-out"
                  >
                    Movie Screens
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blurry hover:underline transition duration-200 ease-in-out"
                  >
                    Sound Systems
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blurry hover:underline transition duration-200 ease-in-out"
                  >
                    Water Toys
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blurry hover:underline transition duration-200 ease-in-out"
                  >
                    Wedding
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blurry hover:underline transition duration-200 ease-in-out"
                  >
                    Winter
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/policie"
              className="px-4 py-2 text-sm bg-white text-gray-900 shadow-sm ring-1 ring-secondary hover:bg-gray-200 hover:text-blurry transition duration-200 ease-in-out"
            >
              Policies
            </Link>
            <Link
              to="/holidayinfo"
              className="px-4 py-2 text-sm bg-white text-gray-900 shadow-sm ring-1 ring-secondary hover:bg-gray-200 hover:text-blurry transition duration-200 ease-in-out"
            >
              Holiday Info
            </Link>
            <Link
              to="/contacts"
              className="px-4 py-2 text-sm bg-white text-gray-900 shadow-sm ring-1 ring-secondary  hover:bg-gray-200 hover:text-blurry transition duration-200 ease-in-out"
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
          } md:hidden absolute  bg-secondary mt-[90px] w-full z-10 flex flex-col justify-center items-center py-2 gap-4 transition-transform duration-300`}
        >
          <Link
            to="/home2"
            className="text-white hover:text-blurry transition duration-200 ease-in-out"
          >
            Home
          </Link>
          <div className="relative">
            <button
              className="text-white hover:text-blurry transition duration-200 ease-in-out flex items-center justify-between w-full"
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              Rental Items
              {isMobileDropdownOpen ? (
                <AiOutlineClose className="ml-2 text-white"/>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
            {isMobileDropdownOpen && (
              <div className="absolute left-0 mt-1 bg-white w-[200px]">
                <Link
                  to="/bounsehouse2"
                  className="block px-4 py-2 text-blurry hover:bg-gray-100 hover:text-secondary hover:underline transition duration-200 ease-in-out "
                >
                  Bounce Houses
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-blurry hover:bg-gray-100 hover:text-secondary hover:underline transition duration-200 ease-in-out"
                >
                  Concession Machines
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-blurry hover:bg-gray-100 hover:text-secondary hover:underline transition duration-200 ease-in-out"
                >
                  Equipment
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-blurry hover:bg-gray-100 hover:text-secondary hover:underline transition duration-200 ease-in-out"
                >
                  Food And Beverage
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-blurry hover:bg-gray-100 hover:text-secondary hover:underline transition duration-200 ease-in-out"
                >
                  Games And Activities
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-blurry hover:bg-gray-100 hover:text-secondary hover:underline transition duration-200 ease-in-out"
                >
                  Movie Screens
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-blurry hover:bg-gray-100 hover:text-secondary hover:underline transition duration-200 ease-in-out"
                >
                  Sound Systems
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-blurry hover:bg-gray-100 hover:text-secondary hover:underline transition duration-200 ease-in-out"
                >
                  Water Toys
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-blurry hover:bg-gray-100 hover:text-secondary hover:underline transition duration-200 ease-in-out"
                >
                  Wedding
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-blurry hover:bg-gray-100 hover:text-secondary hover:underline transition duration-200 ease-in-out"
                >
                 Winter
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/policie"
            className="text-white hover:text-blurry transition duration-200 ease-in-out"
          >
            Policies
          </Link>
          <Link
            to="/holidayinfo"
            className="text-white hover:text-blurry transition duration-200 ease-in-out"
          >
            Holiday Info
          </Link>
          <Link
            to="/contacts"
            className="text-white hover:text-blurry transition duration-200 ease-in-out"
          >
            contact
          </Link>         
        </div>
        <div className="pt-6 pr-4">
        <IoMdCart className="text-[45px]"/>
        </div>
        </div>
        {/* Call Info */}
        <div className="text-blue-900 flex flex-row justify-end py-2 pr-9 gap-2 text-[18px]">
          <span>Reserve Online! or Call/Text </span>
          <span className="font-semibold">(801) 319-5524</span>
        </div>
      </header>
    </>
  );
};

export default HereNav;

import React, { useState,useEffect } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      className={`fixed w-full z-10 text-secondary pb-2 transition duration-300 ${
        isScrolled ? "bg-white text-secondary" : "bg-transparent text-secondary"
      }`}
    >
      <nav className="container flex justify-around pt-2">
        <div className="flex items-center gap-6 text-l font-bold text-secondary">
          <img src={Logo} alt="logo" className=" w-2xl h-20" />
          <div className="hidden md:flex items-center gap-6 text-l font-bold text-secondary">
            <Link
              to="/"
              className="hover:text-green-500 cursor-pointer  transition duration-200 ease-linear"
            >
              Home
            </Link>
            <Link
              to="/location"
              className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
            >
              Location
            </Link>
            {/* Dropdown Menu */}
            <div className="relative">
              <Link
                to="/items"
                className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Rental Items
              </Link>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-secondary shadow-md">
                  <Link
                    to="/bouncehousefaq"
                    className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
                  >
                    Bounce Houses
                  </Link>
                  <Link
                    to="/item2"
                    className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
                  >
                    Concessions
                  </Link>
                  <Link
                    to="/item3"
                    className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
                  >
                    Equipment
                  </Link>
                  <Link
                    to="/item3"
                    className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
                  >
                    Food & Beverage
                  </Link>
                  <Link
                    to="/item3"
                    className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
                  >
                    Games & Activities
                  </Link>
                  <Link
                    to="/item3"
                    className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
                  >
                    Movie Screens
                  </Link>
                  <Link
                    to="/item3"
                    className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
                  >
                    Sound Systems
                  </Link>
                  <Link
                    to="/item3"
                    className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
                  >
                    Water Toys
                  </Link>
                  <Link
                    to="/item3"
                    className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
                  >
                    Wedding
                  </Link>
                  <Link
                    to="/item3"
                    className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
                  >
                    Winter
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/packages"
              className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
            >
              Package Deals
            </Link>
            <Link
              to="/policies"
              className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
            >
              Policies
            </Link>
            <Link
              to="/contact"
              className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
            >
              Blog
            </Link>
            {/* <Link
              to="/article"
              className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
            >
              Article
            </Link> */}
          </div>
        </div>
        <div className="md:hidden flex items-center">
          {menu ? (
            < AiOutlineClose size={25} onClick={handleChange} className="" />
          ) : (
            <FiAlignJustify size={25} onClick={handleChange} />
          )}
        </div>
      </nav>
      {/* responsive */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-white text-secondary font-bold text-l text-center pt-2 pb-2 gap-3 w-full rounded-br-xl transition-transform duration-500 ease-in`}
      >
        <Link
          to="/"
          className="hover:text-green-500 cursor-pointer  transition duration-200 ease-linear"
        >
          Home
        </Link>
        <Link
          to="/location"
          className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
        >
          Location
        </Link>
        {/* Dropdown Menu */}
        <div className="relative">
          <Link
            to="/items"
            className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Rental Items
          </Link>
          {isDropdownOpen && (
            <div className="absolute top-full right-10 mt-2 w-48 bg-white shadow-md">
              <Link
                to="/bouncehousefaq"
                className="block px-4 py-2  hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
              >
                Bounce Houses
              </Link>
              <Link
                to="/item2"
                className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
              >
                Concessions
              </Link>
              <Link
                to="/item3"
                className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
              >
                Equipment
              </Link>
              <Link
                to="/item3"
                className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
              >
                Food & Beverage
              </Link>
              <Link
                to="/item3"
                className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
              >
                Games & Activities
              </Link>
              <Link
                to="/item3"
                className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
              >
                Movie Screens
              </Link>
              <Link
                to="/item3"
                className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
              >
                Sound Systems
              </Link>
              <Link
                to="/item3"
                className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
              >
                Water Toys
              </Link>
              <Link
                to="/item3"
                className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
              >
                Wedding
              </Link>
              <Link
                to="/item3"
                className="block px-4 py-2 hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
              >
                Winter
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/packages"
          className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
        >
          Package Deals
        </Link>
        <Link
          to="/policies"
          className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
        >
          Policies
        </Link>
        <Link
          to="/contact"
          className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
        >
          Contact
        </Link>
        <Link
          to="/blog"
          className="hover:text-green-500 cursor-pointer transition duration-200 ease-linear"
        >
          Blog
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import { navList } from "./List";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Toaster position="top-center" />

      <div className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-md transition-all duration-300">
        <nav className="flex justify-between items-center px-6 lg:px-20 h-16">
          
          {/* Logo */}
          <h1 className="text-xl font-bold text-red-500 cursor-pointer"></h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 text-white font-medium">
            {navList.map((item, index) => (
              <Link
                key={index}
                smooth
                to={item.linkTo}
                offset={-70}
                duration={600}
                className="hover:text-red-500 cursor-pointer transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-slate-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white py-5 shadow-md text-center">
            {navList.map((item, index) => (
              <Link
                key={index}
                smooth
                to={item.linkTo}
                offset={-70}
                duration={600}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-slate-800 font-medium hover:text-red-500 cursor-pointer"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;


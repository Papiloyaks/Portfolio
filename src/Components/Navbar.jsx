import React, { useState, useEffect } from "react";
import { navList } from "./List";
import { Link } from "react-scroll";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  //  Load theme from backend
  useEffect(() => {
    fetch("http://localhost:4444/api/theme")
      .then((res) => res.json())
      .then((data) => {
        setTheme(data.theme);
        document.documentElement.classList.toggle("dark", data.theme === "dark");
      })
      .catch(() => toast.error("Failed to fetch theme from backend"));
  }, []);

  //  Toggle theme and save to backend
  const toggleTheme = async () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5555/api/theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newTheme }),
      });
      const data = await res.json();

      if (data.success) {
        setTheme(data.theme);
        document.documentElement.classList.toggle("dark", data.theme === "dark");
        toast.success(`Switched to ${data.theme} mode`);
      } else {
        toast.error("Failed to change theme");
      }
    } catch {
      toast.error("Could not connect to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-900 shadow-md transition-all duration-300">
        <nav className="flex justify-between items-center px-6 lg:px-20 h-16">
          {/* Logo / Brand */}
          <h1 className="text-xl font-bold text-red-500 dark:text-amber-300 cursor-pointer">
            <span className="text-slate-700 dark:text-white"></span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 text-slate-800 dark:text-gray-200 font-medium">
            {navList.map((item, index) => (
              <Link
                key={index}
                smooth
                to={item.linkTo}
                offset={-70}
                duration={600}
                className="hover:text-red-500 dark:hover:text-amber-300 cursor-pointer transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </ul>

          {/* Theme toggle + Mobile menu button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              disabled={loading}
              className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 hover:scale-110 transition-transform"
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-slate-800" />
              )}
            </button>

            {/* Hamburger menu for mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-2xl text-slate-700 dark:text-gray-200"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-800 py-5 shadow-md text-center">
            {navList.map((item, index) => (
              <Link
                key={index}
                smooth
                to={item.linkTo}
                offset={-70}
                duration={600}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-slate-800 dark:text-gray-200 font-medium hover:text-red-500 dark:hover:text-amber-300 cursor-pointer"
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

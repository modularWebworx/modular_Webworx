// src/components/Navbar/Navbar.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaSignInAlt, FaUserPlus, FaChevronDown } from "react-icons/fa";
import SvgLogo from "../../svg/SvgLogo/SvgLogo";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();
  const lastScrollY = useRef(window.scrollY);
  const dropdownRefs = useRef({});
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (path) => {
    setIsOpen(false);
    setDropdownOpen(null);
    navigate(path);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY.current) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownOpen !== null &&
        dropdownRefs.current[dropdownOpen] &&
        !dropdownRefs.current[dropdownOpen].contains(event.target)
      ) {
        setDropdownOpen(null);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`w-full bg-black text-white fixed top-0 left-0 z-50 shadow-lg transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative"> {/* Added relative */}
          {/* Left Section: Company Logo and BlobLogo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div
              className="cursor-pointer flex items-center"
              onClick={() => handleNavigate("/")}
            >
              <SvgLogo className="w-8 h-auto opacity-70 animate-spin-scale" />
            </div>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      className="flex items-center space-x-1 hover:text-pink-500 transition-colors focus:outline-none"
                      onClick={() =>
                        setDropdownOpen(dropdownOpen === index ? null : index)
                      }
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen === index}
                    >
                      <span>{link.name}</span>
                      <FaChevronDown className="w-3 h-3" />
                    </button>
                    {/* Dropdown Menu */}
                    {dropdownOpen === index && (
                      <div
                        ref={(el) => (dropdownRefs.current[index] = el)}
                        className="absolute mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg"
                      >
                        {link.dropdown.map((sublink, subIndex) => (
                          <button
                            key={subIndex}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 hover:text-pink-500 transition-colors"
                            onClick={() => handleNavigate(sublink.path)}
                          >
                            {sublink.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? "text-pink-500"
                          : "hover:text-pink-500 transition-colors"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Right Section: Login and Create Account */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Login Button */}
            <button
              className="flex items-center space-x-2 hover:text-pink-500 transition-colors"
              onClick={() => handleNavigate("/login")}
              aria-label="Login"
            >
              <FaSignInAlt className="w-5 h-5" />
              <span className="hidden lg:inline">Login</span>
            </button>

            {/* Create Account Button */}
            <button
              className="flex items-center space-x-2 hover:text-pink-500 transition-colors"
              onClick={() => handleNavigate("/signup")}
              aria-label="Create Account"
            >
              <FaUserPlus className="w-5 h-5" />
              <span className="hidden lg:inline">Create Account</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              className="text-white hover:text-pink-500 transition-colors focus:outline-none"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  // Close Icon
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger Icon
                  <path d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "text-pink-500"
                        : "text-gray-300 hover:text-pink-500 hover:bg-gray-700 transition-colors"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Login and Create Account in Mobile */}
              <div className="border-t border-gray-700 pt-4">
                <button
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-pink-500 hover:bg-gray-700 transition-colors w-full justify-center space-x-2"
                  onClick={() => handleNavigate("/login")}
                >
                  <FaSignInAlt className="w-5 h-5" />
                  <span>Login</span>
                </button>
                <button
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-pink-500 hover:bg-gray-700 transition-colors w-full justify-center space-x-2 mt-2"
                  onClick={() => handleNavigate("/signup")}
                >
                  <FaUserPlus className="w-5 h-5" />
                  <span>Create Account</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

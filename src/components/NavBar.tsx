import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex align-middle justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 align-middle">
            <a href="#" className="text-2xl font-poppins">
              Milana's Portfolio
            </a>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-4">
            <button className="hover:bg-sky-900 hover:text-white font-poppins py-2 px-4 rounded-full">
              <a href="#about">About</a>
            </button>
            <button className="hover:bg-sky-900 hover:text-white font-poppins py-2 px-4 rounded-full">
              <a href="#projects">Resume</a>
            </button>
            <button className="hover:bg-sky-900 hover:text-white font-poppins py-2 px-4 rounded-full">
              <a href="#contact">Contact</a>
            </button>
          </div>

          {/* Hamburger menu for small screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <a href="#about" className="block px-4 py-2 hover:bg-blue-700">
            About
          </a>
          <a href="#projects" className="block px-4 py-2 hover:bg-blue-700">
            Projects
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-blue-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

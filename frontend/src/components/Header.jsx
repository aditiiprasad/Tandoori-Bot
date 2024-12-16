import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import logo from "../assets/logo.png";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [quickLinksDropdownOpen, setQuickLinksDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleQuickLinksDropdown = () => setQuickLinksDropdownOpen(!quickLinksDropdownOpen);


  return (
    <header className="bg-gradient-to-br from-red-700 to-tandoori-red  text-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
        {/* Logo and Title */}
        <a
          href="/"
          className="flex items-center text-white hover:text-golden-yellow transition duration-300 mb-4 sm:mb-0"
        >
          <img
            src={logo}
            alt="TandooriBOT Logo"
            className="h-16 sm:h-20 md:h-24 mr-3"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">
              TandooriBOT
            </h1>
            <p className="text-sm sm:text-base md:text-lg italic text-white">
              Your AI kitchen assistant: Ingredients in, recipes out!
            </p>
          </div>
        </a>

      
          {/* Back to Home Icon */}
          <a
            href="/"
            className="text-white hover:text-golden-yellow transition duration-300"
          >
            <AiOutlineHome size={40} />
          </a>

          
          
     
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-red-700 to-tandoori-red text-white py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo and Title */}
        <a
          href="/"
          className="flex items-center text-white hover:text-golden-yellow transition duration-300"
        >
          <img
            src={logo}
            alt="TandooriBOT Logo"
            className="h-24 mr-3"
          />
          <div>
            <h1 className="text-4xl font-extrabold tracking-wide">
              TandooriBOT
            </h1>
            <p className="text-base italic text-white ">
              Your AI kitchen assistant: Ingredients in, recipes out!
            </p>
          </div>
        </a>

        {/* Back to Home Icon */}
        <a
          href="/"
          className="text-white hover:text-golden-yellow transition duration-300"
        >
          <AiOutlineHome size={50} />
        </a>
      </div>
    </header>
  );
};

export default Header;

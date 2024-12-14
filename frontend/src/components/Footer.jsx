import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-golden-yellow to-amber-500 text-white py-12 shadow-2xl">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo */}
        <div>
          <h1 className="text-tandoori-red text-4xl font-extrabold transform hover:scale-105 transition-transform duration-300 ">
            TandooriBOT
          </h1>
          <p className="mt-4 text-sm text-white ">
            Your AI kitchen assistant: Ingredients in, recipes out!
          </p>
        </div>

        {/* Column 2: About the Maker */}
        <div>
          <h2 className="text-tandoori-red text-xl font-semibold">
            About the Maker
          </h2>
          <p className="mt-2 text-base ">
            Hi, I'm Aditi, a passionate web developer and tech enthusiast,
            crafting interactive applications with a blend of creativity and
            technology.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tandoori-red hover:underline text-base font-semibold mt-2 inline-block hover:translate-y-1 transition-transform duration-300"
          >
            View My Resume
          </a>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h2 className="text-tandoori-red text-xl font-semibold">
            Contact Us
          </h2>
          <ul className="mt-2 space-y-2 text-base">
            <li>
              <a
                href="mailto:aditi03prasad@gmail.com"
                className="hover:text-burnt-orange hover:translate-x-1 transition-transform duration-300"
              >
                aditi03prasad@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aditiiprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-burnt-orange hover:translate-x-1 transition-transform duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aditiiprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-burnt-orange hover:translate-x-1 transition-transform duration-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/aditiiprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-burnt-orange hover:translate-x-1 transition-transform duration-300"
              >
                LeetCode
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/aditiiprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-burnt-orange hover:translate-x-1 transition-transform duration-300"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h2 className="text-tandoori-red text-xl font-semibold">
            Quick Links
          </h2>
          <ul className="mt-2 space-y-2 text-base">
            <li>
              <a
                href="/ingredients"
                className="hover:text-burnt-orange hover:translate-x-1 transition-transform duration-300"
              >
                AI Tells You What to Make Based on Ingredients
              </a>
            </li>
            <li>
              <a
                href="/random-recipe"
                className="hover:text-burnt-orange hover:translate-x-1 transition-transform duration-300"
              >
                Random Recipe For You
              </a>
            </li>
            <li>
              <a
                href="/underdogs-restaurants"
                className="hover:text-burnt-orange hover:translate-x-1 transition-transform duration-300"
              >
                Underdogs of the Restaurants
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-14 text-center text-sm">
        <p className="hover:shadow-md p-2 rounded-lg transition-shadow duration-300">
          &copy; 2024 TandooriBot. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

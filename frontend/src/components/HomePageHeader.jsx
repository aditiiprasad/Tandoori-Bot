import { useEffect, useState } from "react";

import image1 from "../assets/bg.jpeg";
import image2 from "../assets/bg2.webp";
import image3 from "../assets/bg3.webp";
import image4 from "../assets/bg4.webp";
import logo from "../assets/logo.png";

const HomePageHeader = () => {
  const messages = [
    "Tell me your ingredients, and I'll spice up the recipe!",
    "From pantry to plate—your personalized recipe bot.",
    "Got ingredients? Get recipes, served hot!",
    "Your kitchen assistant: Ingredients in, recipes out!",
    "Just add ingredients, and we'll cook up the perfect recipe!",
    "What’s in your pantry? Let me craft your next dish!",
    "Turn your ingredients into delicious dishes with a dash of AI.",
    "Give me ingredients, I'll serve you flavors!",
    "From ingredient list to dinner bliss—let TandooriBot handle the rest!",
    "Cooking made easy: Ingredients in, recipes out!",
  ];

  const backgroundImages = [image1, image2, image3, image4];

  const [currentMessage, setCurrentMessage] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const message = messages[index];
    const typeWriterEffect = setInterval(() => {
      setCurrentMessage((prev) => prev + message[charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 100);

    if (charIndex === message.length) {
      clearInterval(typeWriterEffect);
      setTimeout(() => {
        setCharIndex(0);
        setCurrentMessage("");
        setIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 1000);
    }

    return () => clearInterval(typeWriterEffect);
  }, [charIndex, index, messages]);

  useEffect(() => {
    const backgroundEffect = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(backgroundEffect);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Taskbar */}
      <div className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-55 text-white flex justify-between items-center px-6 py-4 z-50">
        {/* Left Side - Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="TandooriBot Logo" className="w-10 h-10" />
          {/* Hide TandooriBOT on small screens */}
          <div className="text-2xl font-bold hidden sm:block">TandooriBOT</div>
        </div>

        {/* Right Side - Navigation */}
        <div className="flex gap-6 items-center">
         {/* Services Dropdown */}
<div className="relative group">
  <button className="hover:underline focus:outline-none font-bold">
    Services
  </button>
  <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 hidden group-hover:block group-focus:block w-64">
    <ul>
      <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-200 cursor-pointer">
        <a
          href="/recipe" // Link for Cook From Stock
          className="flex justify-between items-center w-full"
        >
          <span>Cook From Stock</span>
          <span className="bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            Unavailable
          </span>
        </a>
      </li>
      <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-200 cursor-pointer">
        <a
          href="/recipe" // Link for Random Dish
          className="flex justify-between items-center w-full"
        >
          <span>Random Dish</span>
          <span className="bg-olive-green text-white text-xs font-semibold px-2 py-1 rounded-md">
            Available
          </span>
        </a>
      </li>
      <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-200 cursor-pointer">
        <a
          href="/random-restaurant" // Link for Random Restaurant
          className="flex justify-between items-center w-full"
        >
          <span>Random Restaurant</span>
          <span className="bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            Unavailable
          </span>
        </a>
      </li>
    </ul>
  </div>
</div>

          {/* Socials Dropdown */}
          <div className="relative group">
            <button className="hover:underline focus:outline-none font-bold">
              About the Developer
            </button>
            <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 hidden group-hover:block group-focus:block">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://www.linkedin.com/in/aditiiprasad/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://github.com/aditiiprasad" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://leetcode.com/u/aditiiprasad/" target="_blank" rel="noopener noreferrer">
                    Leetcode
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://github.com/aditiiprasad" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Source Code Link */}
          <a
            href="https://github.com/aditiiprasad/tandoori-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-bold"
          >
            Source Code
          </a>
        </div>
      </div>

      {/* Background Images Layer */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              idx === backgroundIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to TandooriBOT</h1>
        {/* Logo under the heading */}
        <img
          src={logo}
          alt="TandooriBot Logo"
          className="w-32 h-32 mb-6 animate-bounce"
        />
        <div className="text-xl font-medium mt-4">{currentMessage}</div>
      </div>
    </div>
  );
};

export default HomePageHeader;

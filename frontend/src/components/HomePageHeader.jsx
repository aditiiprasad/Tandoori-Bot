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
    "Cooking made easy: Ingredients in, recipes out!"
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
    <div className="relative h-screen w-screen">
      {/* Background images layer */}
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
              backgroundPosition: "center"
            }}
          ></div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-900">
        <h1 className="text-5xl font-extrabold mb-4 text-white">
          Welcome to TandooriBot
        </h1>
        {/* Logo under the heading */}
        <img
          src={logo}
          alt="TandooriBot Logo"
          className="w-32 h-32 mb-6 animate-bounce" 
        />
        <div className="text-xl font-medium text-white mt-4">{currentMessage}</div>
       
      </div>
    </div>
  );
};

export default HomePageHeader;

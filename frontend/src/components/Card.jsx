import React from "react";

import { useNavigate } from "react-router-dom"; // If you're using react-router v6.x

const Card = ({ image, name, description }) => {
  const navigate = useNavigate(); // For react-router v6.x
  
  const handleClick = () => {
    navigate("/recipe");
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl shadow-black overflow-hidden transform transition-transform hover:scale-105 m-2">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <span className="bg-deep-purple text-white text-sm font-semibold rounded-full px-2 py-1">
            Uses AI
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={handleClick}
          className="bg-olive-green text-white text-xl font-bold text-center rounded-full py-2 px-3 w-full"
        >
          Launching Soon!
        </button>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ image, name, description, status, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (status === "Explore") {
      navigate(link); 
    } else {
      alert("This service is launching soon!"); 
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl shadow-black overflow-hidden transform transition-transform hover:scale-105 m-2">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <span
            className="bg-gradient-to-br from-deep-purple to-pink-900 text-white text-base font-semibold rounded-full px-2 py-1"
            style={{
              boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.7), -2px -2px 6px rgba(255, 255, 255, 0.3)",
            }}
          >
            {status === "available" ? "Uses AI" : "Uses AI"}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={handleClick}
          className={`text-xl font-bold text-center rounded-full py-2 px-3 w-full  ${
            status === "Explore"
              ? "bg-olive-green text-white hover:bg-golden-yellow"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          disabled={status !== "Explore"} 
        >
          {status === "Explore" ? "Explore" : "Launching Soon"}
        </button>
      </div>
    </div>
  );
};

export default Card;

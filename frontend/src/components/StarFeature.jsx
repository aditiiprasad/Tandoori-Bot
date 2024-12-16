import React from "react";
import { useNavigate } from "react-router-dom";
import pic from '../assets/cook.jpg'

const StarFeature = () => {
  const navigate = useNavigate();

 
  const handleClick = () => {
    navigate("/cookfromstock");
  };

  return (
    <div className="bg-white bg-opacity-30 rounded-lg shadow-2xl shadow-black overflow-hidden transform transition-transform hover:scale-105 m-6">
      <div className="flex flex-col md:flex-row">
        
        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-2xl font-bold text-white  mb-4">
            Cook From Stock
          </h3>
          <img
            src={pic} 
            alt="Cook From Stock"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

       
        <div className="w-full md:w-1/2 p-4">
          {/* Badges */}
          <div className="flex space-x-2 mb-4">
            <span
              className="bg-gradient-to-br from-orange-600 to-pink-900 text-white text-base font-semibold rounded-full px-2 py-2"
              style={{
                boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.7), -2px -2px 6px rgba(255, 255, 255, 0.3)",
              }}
            >
              Star Feature 🌟
            </span>
            <span
              className="bg-gradient-to-br from-deep-purple to-pink-900 text-white text-base font-semibold rounded-full px-2 py-2"
              style={{
                boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.7), -2px -2px 6px rgba(255, 255, 255, 0.3)",
              }}
            >
              Uses AI
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-100 mb-4">
            Turn your leftover ingredients into culinary masterpieces! Simply tell
            the bot what's in your fridge, and it will whip up personalized recipes
            tailored to your dietary preferences. No ingredient goes to waste—
            deliciousness awaits!
          </p>

          {/* Go to Feature Button */}
          <button
            onClick={handleClick}
            className="text-xl font-bold text-center rounded-full py-2 px-3 w-full bg-olive-green text-white hover:bg-golden-yellow"
          >
            Go to Feature
          </button>
        </div>
      </div>
    </div>
  );
};

export default StarFeature;

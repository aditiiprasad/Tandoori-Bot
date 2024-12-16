import React, { useState } from "react";
import chatBackground from '../assets/recbg.jpeg'

const Input = ({ ingredients, setIngredients }) => {
  const [ingredient, setIngredient] = useState("");

  const addIngredient = () => {
    if (ingredient.trim() && !ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
  };

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-start space-y-6">
      {/* Feature Introduction Section */}
      <div className="mb-6 text-center  p-3 rounded-xl"
      >
        <h2 className="text-4xl font-extrabold text-golden-yellow">Cook from Stock</h2>
        <p className="text-lg text-white mt-2">
        Turn your leftover ingredients into culinary masterpieces! Simply tell the bot what's in your fridge, and it will whip up personalized recipes tailored to your dietary preferences. No ingredient goes to waste—deliciousness awaits!
        </p>
      </div>

      {/* Input Field Container */}
      <div className="flex items-center space-x-3 w-full">
        <input
          type="text"
          className="border-2 border-olive-green bg-yellow-100 rounded-full px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-olive-green focus:ring-opacity-50 placeholder-soft-brown shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          placeholder="What's in your Fridge?"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button
          onClick={addIngredient}
          className="bg-olive-green text-white font-bold px-5 py-3 rounded-full shadow-md hover:bg-olive-green/80 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Add
        </button>
      </div>

      {/* Ingredient Badges */}
      <div className="flex flex-wrap gap-3 mt-4">
        {ingredients.map((ing, index) => (
          <span
            key={index}
            className="flex items-center bg-gradient-to-br from-deep-purple to-pink-900 text-white font-semibold px-4 py-2 rounded-full shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {ing}
            <button
              onClick={() => removeIngredient(index)}
              className="ml-3 font-bold text-white hover:text-tandoori-red"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Input;

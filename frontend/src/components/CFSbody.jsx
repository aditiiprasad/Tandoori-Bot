import React, { useState } from "react";
import { generateRecipe } from "../lib/gemini2";

const CFSbody = () => {
    const [ingredients, setIngredients] = useState([]);
    const [input, setInput] = useState("");
    const [generatedRecipe, setGeneratedRecipe] = useState("");
    const [chat, setChat] = useState("");
  
    // Handle ingredient addition
    const handleAddIngredient = () => {
      if (input.trim() && !ingredients.includes(input)) {
        setIngredients([...ingredients, input]);
        setInput("");
      }
    };
  
    // Handle ingredient removal
    const handleRemoveIngredient = (ingredient) => {
      setIngredients(ingredients.filter((item) => item !== ingredient));
    };
  
    // Handle recipe generation
    const handleGenerateRecipe = async () => {
      if (ingredients.length === 0) {
        setGeneratedRecipe("Please add some ingredients to generate a recipe.");
        return;
      }
  
      setGeneratedRecipe("Generating recipe... Please wait.");
      const recipe = await generateRecipe(ingredients);
      setGeneratedRecipe(recipe);
    };
  
    return (
      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Ingredient Input Section */}
        <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Add Ingredients</h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter an ingredient"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleAddIngredient}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center"
              >
                {ingredient}
                <button
                  onClick={() => handleRemoveIngredient(ingredient)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
  
        {/* Recipe Generation Section */}
        <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Generate Recipe</h2>
          <button
            onClick={handleGenerateRecipe}
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Generate Recipe
          </button>
          {generatedRecipe && (
            <div className="mt-4 bg-white p-4 rounded border">
              <h3 className="font-semibold">Your Recipe</h3>
              <p className="text-gray-700">{generatedRecipe}</p>
            </div>
          )}
        </div>
  
        {/* Chat Section */}
        <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recipe Chat</h2>
          <textarea
            placeholder="Ask questions about your recipe..."
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            className="w-full h-40 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>
    );
  };
  
  export default CFSbody;
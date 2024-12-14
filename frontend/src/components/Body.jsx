import React, { useState } from "react";
import IngredientsRecipe from "./IngredientsRecipe";  
import RandomRecipe from "./RandomRecipe";  

const Body = () => {
  const [activeTab, setActiveTab] = useState("random"); 

  return (
    <div className="container mx-auto mt-8 px-6">
      {/* Tabs Section */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-6 py-3 font-semibold text-lg rounded-t-md transition-all ${
            activeTab === "ingredients"
              ? "bg-tandoori-red text-white shadow-lg"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("ingredients")}
        >
          Recipe by Ingredients
        </button>
        <button
          className={`ml-4 px-6 py-3 font-semibold text-lg rounded-t-md transition-all ${
            activeTab === "random"
              ? "bg-tandoori-red text-white shadow-lg"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("random")}
        >
          Random Recipes
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-md shadow-md p-6">
        {activeTab === "ingredients" && (
          <IngredientsRecipe
            placeholder="Type ingredients, e.g., chicken, rice, spices..."
          />
        )}
        {activeTab === "random" && (
          <RandomRecipe
            placeholder="Type 'Surprise me!' or something fun..."
          />
        )}
      </div>
    </div>
  );
};

export default Body;

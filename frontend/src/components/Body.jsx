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
          className={`px-8 py-4 text-xl font-bold rounded-full transition-all ${
            activeTab === "ingredients"
              ? "bg-deep-purple text-white shadow-2xl transform hover:scale-105"
              : "text-white bg-transparent border-2 border-white hover:bg-deep-purple hover:border-deep-purple focus:bg-deep-purple focus:border-deep-purple"
          }`}
          onClick={() => setActiveTab("ingredients")}
        >
          Recipe by Ingredients
        </button>
        <button
          className={`ml-4 px-8 py-4  text-xl font-bold rounded-full transition-all ${
            activeTab === "random"
              ? "bg-deep-purple text-white shadow-2xl transform hover:scale-105"
              : "text-white bg-transparent border-2 border-white hover:bg-deep-purple hover:border-deep-purple focus:bg-deep-purple focus:border-deep-purple"
          }`}
          onClick={() => setActiveTab("random")}
        >
          Random Recipes
        </button>
      </div>

      {/* Content Section */}
      <div className=" bg-gradient-to-r from-golden-yellow via-yellow-500 to-burnt-orange rounded-md shadow-md mb-5 p-6">
        {activeTab === "ingredients" && (
          <IngredientsRecipe placeholder="Type ingredients, e.g., chicken, rice, spices..." />
        )}
        {activeTab === "random" && (
          <RandomRecipe placeholder="Type 'Surprise me!' or something fun..." />
        )}
      </div>
    </div>
  );
};

export default Body;

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDvNG5SNBYzEQiwdqb60J91cSFSNc-IG0Q");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Log the model to debug its structure
console.log("Generated Model:", model);

export const generateRecipe = async (ingredients) => {
  try {
    // Log to verify the structure
    console.log("Ingredients:", ingredients);

    const response = await model.generateText({
      prompt: `Create a recipe using these ingredients: ${ingredients.join(", ")}`,
    });
    if (response.candidates && response.candidates[0]?.output) {
      return response.candidates[0].output;
    }
    return "No recipe could be generated with the provided ingredients.";
  } catch (error) {
    console.error("Error during recipe generation:", error.message);
    return "There was an error generating the recipe. Please try again.";
  }
};

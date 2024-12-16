import { GoogleGenerativeAI } from "@google/generative-ai";



const genAI = new GoogleGenerativeAI("AIzaSyDvNG5SNBYzEQiwdqb60J91cSFSNc-IG0Q");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to generate a recipe using provided ingredients
export const generateRecipe = async (ingredients) => {
  if (!ingredients || ingredients.length === 0) {
    throw new Error("No ingredients provided");
  }

  try {
    const prompt = `
      Using the following ingredients: ${ingredients.join(", ")},
      create a detailed recipe with Markdown formatting.

      The recipe should include:
      - A title
      - A short description
      - A list of ingredients
      - Step-by-step instructions
    `;

    const result = await model.generateContent(prompt);
    const recipe = result.response.text();
    console.log(recipe); // Log the generated recipe
    return recipe;       // Return the recipe text
  } catch (error) {
    console.error("Error generating recipe:", error);
    return "Failed to generate recipe. Please try again.";
  }
};

// Function to answer questions about a generated recipe
export const answerRecipeQuestion = async (recipe, question) => {
  if (!recipe || !question) {
    throw new Error("Both recipe and question are required");
  }

  try {
    const prompt = `
      Here is the recipe:
      ${recipe}

      Answer the following question about the recipe:
      ${question}
    `;

    const result = await model.generateContent(prompt);
    const answer = result.response.text();
    console.log(answer); // Log the generated answer
    return answer;       // Return the answer text
  } catch (error) {
    console.error("Error answering recipe question:", error);
    return "Failed to answer the question. Please try again.";
  }
};

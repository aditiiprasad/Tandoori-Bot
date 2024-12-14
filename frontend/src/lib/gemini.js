// ../lib/gemini.js

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyDvNG5SNBYzEQiwdqb60J91cSFSNc-IG0Q');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export const generateRecipe = async () => {
  try {
    // Use your desired prompt for generating the recipe
    const prompt = "Generate a random recipe";

    // Await the result from the model
    const result = await model.generateContent(prompt);
    console.log(result.response.text());  // Log the generated recipe
    return result.response.text();  // Return the recipe text
  } catch (error) {
    console.error("Error generating recipe:", error);
    return "Failed to generate recipe. Please try again.";
  }
};

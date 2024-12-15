import { GoogleGenerativeAI } from '@google/generative-ai';


const genAI = new GoogleGenerativeAI('AIzaSyDvNG5SNBYzEQiwdqb60J91cSFSNc-IG0Q');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Function to generate a random recipe with Markdown formatting
export const generateRecipe = async () => {
  try {
    const prompt = `
   Generate a completely **random** and **Indian recipe** in Markdown format.  
   The recipe should include the following sections:
- **Title**: The name of the dish (e.g., Butter Chicken, Chole Bhature, Biryani, etc.)
- **Ingredients**: List the ingredients in a use -.
- **Instructions**: Provide step-by-step instructions with step 1 ,step 2 etc ,and steps in bold 

The dish should be **Indian** or **commonly available in India** with a variety of ingredients and cooking styles. It should reflect **regional diversity** (North Indian, South Indian, Punjabi, Gujarati, Bengali, etc.) with different preparation methods, flavors, and spices.

Please ensure that the following elements are included:
- **Bold headings** for the title, ingredients, instructions, and description.
- Use - for the ingredient list and other lists
- **Dish name** should be simplified or common (e.g., Butter Chicken, Chole Bhature, Aloo Gobi).
- Make sure the recipe is **unique**, varying in cuisine and style each time.

Here is a list of famous Indian dishes to choose from , should be complete meal-
- **Butter Chicken**
- **Chole Bhature**
- **Biryani**
- **Aloo Gobi**
- **Masala Dosa**
- **Samosa**
- **Tandoori Chicken**
- **Paneer Tikka**
- **Dal Makhani**
- **Kadhi Pakora**
- **Pav Bhaji**
- **Vada Pav**
- **Aloo Paratha**
- **Pani Puri**
- **Chole**
- **Bhel Puri**
- **Rajma**
- **Pesarattu**
- **Dhokla**
- **Bhindi Masala**
- **Methi Thepla**
- **Gulab Jamun**
- **Jalebi**
- **Rogan Josh**
- **Kofta**
- **Pulao**
- **Bisi Bele Bath**
- **Pork Vindaloo**
- **Fish Curry**
- **Macher Jhol**
- **Pork Sorpotel**
- **Mutton Korma**
- **Tamarind Rice**
- **Puliyodarai**
- **Chapati**
- **Naan**
- **Kheer**
- **Lassi**
- **Momos**
- **Idli Sambhar**
- **Pongal**
- **Tandoori Roti**
- **Chana Masala**
- **Aloo Tikki**
- **Hyderabadi Haleem**
- **Nihari**
- **Chicken Malai Tikka**
- **Kachori**
- **Methi Malai Murg**
- **Fried Fish**
- **Malai Kofta**
- **Aloo Methi**
- **Rava Upma**
- **Kadhi**
- **Litti Chokha**

Please generate a recipe based on one of these dishes or any other **Indian dish**.  

Example output:
# **Butter Chicken**
## **Ingredients**:
- Chicken (500g)
- Butter (2 tbsp)
- Garlic paste (1 tsp)
- Tomato puree (1 cup)
- Heavy cream (1/4 cup)
- Garam masala (1 tsp)
- Salt to taste

## **Instructions**:
Step 1. Marinate the chicken with yogurt and spices.
Step 2. Cook the chicken in a pan with butter until browned.
Step 3. Add garlic and tomato puree, and cook until fragrant.
Step 4. Stir in cream and garam masala, and simmer.
Step 5. Serve with naan or rice.


    `;

    const result = await model.generateContent(prompt);
    const recipe = result.response.text();
    console.log(recipe);  // Log the generated recipe
    return recipe;  // Return the recipe text
  } catch (error) {
    console.error("Error generating recipe:", error);
    return "Failed to generate recipe. Please try again.";
  }
};

// Function to answer questions based on the generated recipe, with Markdown formatting
export const generateAnswer = async (query, recipeText) => {
  try {
    const prompt = `
    The following is a recipe for a dish in Markdown format: 
    ${recipeText}

    Answer the following question based on the recipe: 
    "${query}"

    Provide the answer in **Markdown format**, making it easy to read. 
    Use headings, bold, and bullet points where necessary.
    `;

    const result = await model.generateContent(prompt);
    const answer = result.response.text();  // Get the generated answer
    console.log(answer);  // Log the generated answer
    return answer;  // Return the answer to the question
  } catch (error) {
    console.error("Error answering question:", error);
    return "Sorry, I couldn't answer that question. Please try again.";
  }
};

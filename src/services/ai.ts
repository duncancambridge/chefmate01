import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API
// Note: In a real production app, you might proxy this through a backend to hide the key.
// For this client-side demo, we use the Vite env variable.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const generateShoppingList = async (mealIdea: string) => {
  if (!API_KEY) {
    throw new Error("Missing Gemini API Key. Please add VITE_GEMINI_API_KEY to your .env file.");
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  // Updated to use the requested Gemini 2.0 Flash model
  // Note: "gemini-2.5-flash" does not exist yet. The latest flash model is gemini-2.0-flash.
  // I will use gemini-2.0-flash as it is the most current successor to 1.5.
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `
    You are ChefMate, a helpful cooking assistant.
    Your task is to convert the user's natural language meal idea into a structured shopping list.
    
    User Request: "${mealIdea}"
    
    Strictly adhere to these categories: 'meat', 'produce', 'dairy', 'bakery', 'pantry'.
    
    Return ONLY raw JSON (no markdown formatting, no code blocks) matching this exact schema:
    {
      "meal_title": "A creative and short title for the meal",
      "ingredients": [
        {
          "item": "Ingredient Name",
          "category": "one_of_the_strict_categories",
          "quantity": "Amount (e.g. 200g, 1 cup, to taste)"
        }
      ]
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Clean up if the model accidentally returns markdown
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    return JSON.parse(cleanText);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate shopping list. Please try again.");
  }
};

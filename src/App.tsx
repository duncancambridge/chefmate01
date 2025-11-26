import React, { useState } from 'react';
import { Header } from './components/Header';
import { MealInput } from './components/MealInput';
import { IconLegend } from './components/IconLegend';
import { IngredientList } from './components/IngredientList';
import type { Ingredient } from './components/IngredientList';

interface MealPlan {
  meal_title: string;
  ingredients: Ingredient[];
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [mealPlan, setMealPlan] = useState<MealPlan | null>(null);

  const generateList = async (input: string) => {
    setIsLoading(true);
    setMealPlan(null); // Reset previous result

    // Simulate AI delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock Response based on specification
    const mockResponse: MealPlan = {
      meal_title: input.length > 20 ? "Custom Gourmet Meal" : "Classic " + input,
      ingredients: [
        { item: "Tomatoes", category: "produce", quantity: "2 units" },
        { item: "Beef Mince", category: "meat", quantity: "500g" },
        { item: "Cheese / Milk", category: "dairy", quantity: "1 cup" },
        { item: "Artisan Bread", category: "bakery", quantity: "1 loaf" },
        { item: "Salt & Spices", category: "pantry", quantity: "to taste" },
      ]
    };
    
    // Attempt to make the mock slightly dynamic based on input just for fun before real AI
    if (input.toLowerCase().includes("pasta") || input.toLowerCase().includes("spaghetti")) {
       mockResponse.meal_title = "Italian Pasta Night";
       mockResponse.ingredients = [
        { item: "Pancetta or Bacon", category: "meat", quantity: "150g" },
        { item: "Eggs", category: "dairy", quantity: "3 large" },
        { item: "Spaghetti", category: "bakery", quantity: "400g" },
        { item: "Black Pepper", category: "pantry", quantity: "to taste" },
        { item: "Parmesan Cheese", category: "dairy", quantity: "100g" }
       ];
    }

    setMealPlan(mockResponse);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center px-4 sm:px-6">
      <div className="w-full max-w-3xl space-y-8 pb-20">
        <Header />
        
        <div className="space-y-12">
           <section className="text-center space-y-2">
             <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
               Streamline your grocery run.
             </h2>
             <p className="text-slate-500 text-lg">
               Turn any meal idea into an organized checklist in seconds.
             </p>
           </section>

           <MealInput onGenerate={generateList} isLoading={isLoading} />
           
           {mealPlan && (
             <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
               <div className="border-t border-slate-200" />
               <IconLegend />
               <IngredientList 
                 ingredients={mealPlan.ingredients} 
                 mealTitle={mealPlan.meal_title} 
               />
             </div>
           )}
        </div>
      </div>
    </div>
  );
}

export default App;

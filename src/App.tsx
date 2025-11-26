import React, { useState } from 'react';
import { Header } from './components/Header';
import { MealInput } from './components/MealInput';
import { IconLegend } from './components/IconLegend';
import { IngredientList } from './components/IngredientList';
import type { Ingredient } from './components/IngredientList';
import { generateShoppingList } from './services/ai';

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

    try {
      const plan = await generateShoppingList(input);
      setMealPlan(plan);
    } catch (error) {
      console.error("Error generating list:", error);
      // Fallback or alert could go here
      alert("Something went wrong! Please check your API key or try again.");
    } finally {
      setIsLoading(false);
    }
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

import React, { useState } from 'react';
import { Beef, Carrot, Milk, Wheat, ShoppingBasket, Check } from 'lucide-react';
import { clsx } from 'clsx';

export type Category = 'meat' | 'produce' | 'dairy' | 'bakery' | 'pantry';

export interface Ingredient {
  item: string;
  category: Category;
  quantity: string;
  checked?: boolean;
}

interface IngredientListProps {
  ingredients: Ingredient[];
  mealTitle: string;
}

const CategoryIcon = ({ category }: { category: Category }) => {
  switch (category) {
    case 'meat': return <Beef className="w-5 h-5 text-red-500" />;
    case 'produce': return <Carrot className="w-5 h-5 text-green-500" />;
    case 'dairy': return <Milk className="w-5 h-5 text-blue-500" />;
    case 'bakery': return <Wheat className="w-5 h-5 text-yellow-600" />;
    default: return <ShoppingBasket className="w-5 h-5 text-slate-500" />;
  }
};

export const IngredientList: React.FC<IngredientListProps> = ({ ingredients: initialIngredients, mealTitle }) => {
  const [ingredients, setIngredients] = useState(initialIngredients);

  const toggleItem = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients[index].checked = !newIngredients[index].checked;
    setIngredients(newIngredients);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-bold text-center text-slate-800 font-serif">
        {mealTitle}
      </h2>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {ingredients.map((ing, index) => (
          <div
            key={`${ing.item}-${index}`}
            onClick={() => toggleItem(index)}
            className={clsx(
              "flex items-center gap-4 p-4 border-b border-slate-50 last:border-0 cursor-pointer transition-all hover:bg-slate-50 group",
              ing.checked && "bg-slate-50/50"
            )}
          >
            <div className={clsx("p-2 rounded-lg bg-white shadow-sm border border-slate-100", ing.checked && "opacity-50")}>
              <CategoryIcon category={ing.category} />
            </div>
            
            <div className="flex-1">
              <p className={clsx(
                "font-medium text-lg transition-all",
                ing.checked ? "text-slate-400 line-through" : "text-slate-700"
              )}>
                {ing.item}
              </p>
              <p className={clsx("text-sm", ing.checked ? "text-slate-300" : "text-slate-500")}>
                {ing.quantity}
              </p>
            </div>

            <div className={clsx(
              "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
              ing.checked ? "bg-sage-500 border-sage-500" : "border-slate-300 group-hover:border-sage-400"
            )}>
              {ing.checked && <Check className="w-4 h-4 text-white" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

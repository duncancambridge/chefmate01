import React, { useState } from 'react';
import { Sparkles, Utensils } from 'lucide-react';
import { clsx } from 'clsx';

interface MealInputProps {
  onGenerate: (meal: string) => void;
  isLoading: boolean;
}

export const MealInput: React.FC<MealInputProps> = ({ onGenerate, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onGenerate(input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      <div className="relative group">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What are you craving today? (e.g., Spicy Thai Basil Chicken)"
          className="w-full p-6 text-lg rounded-2xl border-2 border-slate-200 bg-white shadow-sm focus:border-sage-500 focus:ring-4 focus:ring-sage-500/10 transition-all resize-none h-32 outline-none placeholder:text-slate-400"
          disabled={isLoading}
        />
        <div className="absolute top-4 right-4 text-slate-300">
           <Utensils className="w-5 h-5" />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className={clsx(
          "w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
          isLoading ? "bg-slate-300 cursor-not-allowed" : "bg-sage-500 hover:bg-sage-600"
        )}
      >
        {isLoading ? (
          <>
            <span className="animate-spin text-xl">⏳</span> Planning your meal...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" /> Generate Shopping List
          </>
        )}
      </button>
    </form>
  );
};

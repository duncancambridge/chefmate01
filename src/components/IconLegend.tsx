import React from 'react';
import { Beef, Carrot, Milk, Wheat, ShoppingBasket } from 'lucide-react';

export const IconLegend: React.FC = () => {
  const categories = [
    { label: 'Meat', icon: Beef, color: 'text-red-500 bg-red-50 border-red-100' },
    { label: 'Produce', icon: Carrot, color: 'text-green-500 bg-green-50 border-green-100' },
    { label: 'Dairy', icon: Milk, color: 'text-blue-500 bg-blue-50 border-blue-100' },
    { label: 'Bakery', icon: Wheat, color: 'text-yellow-600 bg-yellow-50 border-yellow-100' },
    { label: 'Pantry', icon: ShoppingBasket, color: 'text-slate-500 bg-slate-50 border-slate-100' },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center py-6">
      {categories.map(({ label, icon: Icon, color }) => (
        <div 
          key={label}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${color} transition-transform hover:scale-105 select-none`}
        >
          <Icon className="w-4 h-4" />
          <span className="text-sm font-medium">{label}</span>
        </div>
      ))}
    </div>
  );
};

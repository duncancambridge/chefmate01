import React from 'react';
import { ChefHat } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center gap-2 py-6">
      <ChefHat className="w-8 h-8 text-sage-500" />
      <h1 className="text-2xl font-bold text-slate-900 tracking-tight">ChefMate</h1>
    </header>
  );
};

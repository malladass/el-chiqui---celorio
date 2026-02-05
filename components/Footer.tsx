import React from 'react';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-xl text-cream font-bold mb-1">El Chiqui</p>
          <p className="text-xs uppercase tracking-wider">Tradición Renovada</p>
        </div>

        <div className="flex gap-6">
          <a href="https://instagram.com/el.chiqui.celorio" target="_blank" rel="noopener noreferrer" className="hover:text-sand transition-colors">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        <div className="text-center md:text-right text-sm">
          <p>&copy; {new Date().getFullYear()} Restaurante El Chiqui.</p>
          <p>Celorio, Llanes (Asturias)</p>
        </div>
      </div>
    </footer>
  );
};
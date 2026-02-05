import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/solomillo-fua.jpg"
          alt="Solomillo con Fua"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-cream">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 border border-cream/30 rounded-full text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
            Desde 1966
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            60 Años de Tradición en Celorio
          </h1>
          <p className="font-sans text-lg md:text-xl text-stone-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            De los guisos de Nieves en cocina de carbón, al producto de cercanía con cocina fusión. Tres generaciones, un referente para comer en Celorio.
          </p>
          {/* Buttons removed for cleaner look */}
        </motion.div>
      </div>
    </section>
  );
};
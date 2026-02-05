import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ["Entrantes", "Arroces", "Pescados", "Carnes", "Mariscos", "Postres"];

const menuItems = [
  // ENTRANTES
  { name: "Pastel de Cabracho", price: "11€", category: "Entrantes", description: "Con mayonesa en su tinta" },
  { name: "Croquetas Caseras", price: "10€", category: "Entrantes", description: "De jamón" },
  { name: "Bocartes del Cantábrico", price: "10€", category: "Entrantes", description: "Marinados y fritos" },
  { name: "Tortinos (3)", price: "9€", category: "Entrantes", description: "Con manzana, sabadiego y huevo de codorniz" },
  { name: "Brioche de Rabo", price: "13€", category: "Entrantes", description: "Con mayonesa picante" },
  { name: "Ensalada Templada", price: "13€", category: "Entrantes", description: "Jamón, langostinos y champiñones" },
  { name: "Ensalada de Tomate", price: "13€", category: "Entrantes", description: "Cebolla encurtida y bonito" },
  { name: "Fritos de Merluza", price: "18€", category: "Entrantes", description: "Con mayonesa picante" },

  // ARROCES
  { name: "Arroz con Bogavante", price: "29€", category: "Arroces", description: "Precio por ración, mínimo 2" },
  { name: "Arroz Negro", price: "19€", category: "Arroces", description: "Con chipirones y ali oli" },
  { name: "Arroz con Almejas", price: "20€", category: "Arroces", description: "Con nuestro toque picante" },
  { name: "Arroz con Carabineros", price: "33€", category: "Arroces", description: "Precio por ración" },

  // PESCADOS
  { name: "Merluza de Anzuelo", price: "18€", category: "Pescados", description: "A baja temperatura con espuma de patata" },

  // CARNES
  { name: "Escalopines Plancha", price: "13€", category: "Carnes", description: "Con salsa de cabrales" },
  { name: "Cachopo", price: "25€", category: "Carnes", description: "Ternera asturiana con jamón y queso ahumau de pría" },
  { name: "Hamburguesa Fuaaa!", price: "15€", category: "Carnes", description: "160gr carne angus, queso cheddar y salsa al foie" },
  { name: "Costilla de Angus", price: "20€", category: "Carnes", description: "A baja temperatura y glaseada" },

  // MARISCOS
  { name: "Andarica", price: "10€", category: "Mariscos", description: "" },
  { name: "Navajas (12 und aprox)", price: "12€", category: "Mariscos", description: "" },
  { name: "Gambón (12 und aprox)", price: "11€", category: "Mariscos", description: "" },
  { name: "Bogavante", price: "S/R", category: "Mariscos", description: "" },
  { name: "Carabinero", price: "26€", category: "Mariscos", description: "" },
  { name: "Mariscada", price: "86€", category: "Mariscos", description: "Bogavante, 2 andaricas, gambón, navajas, langostinos y almejas" },

  // POSTRES
  { name: "Tarta de Queso", price: "6€", category: "Postres", description: "" },
  { name: "Lingote de Nutella", price: "7€", category: "Postres", description: "" },
  { name: "Tarta de Queso y Lotus", price: "7€", category: "Postres", description: "" },
  { name: "Torrija con helado de pistacho", price: "7€", category: "Postres", description: "" },
  { name: "Coulant con helado de pistacho", price: "7€", category: "Postres", description: "" }
];

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  return (
    <section id="carta" className="py-24 bg-sage-100/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-ocean-700 font-sans font-bold text-sm tracking-widest uppercase mb-2 block">Nuestra Propuesta</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800">La Carta</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${activeTab === category
                  ? 'bg-stone-800 text-cream shadow-lg transform scale-105'
                  : 'bg-white text-stone-600 hover:bg-stone-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="max-w-3xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {filteredItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start group border-b border-stone-200 pb-6 last:border-0">
                  <div className="pr-8">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-serif text-xl font-bold text-stone-800 group-hover:text-ocean-700 transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    {item.description && (
                      <p className="font-sans text-stone-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="font-serif text-lg font-bold text-stone-900 whitespace-nowrap">
                    {item.price}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
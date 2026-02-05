import React from 'react';
import { motion } from 'framer-motion';

export const Story: React.FC = () => {
  const generations = [
    {
      year: "1966",
      name: "Nieves",
      role: "El Origen",
      desc: "Fundó El Chiqui con recetas de fuego lento, de las que curan el alma. guisandera, madre y abuela.",
      image: "https://picsum.photos/id/75/600/800" // Placeholder generic vintage/rural
    },
    {
      year: "1990",
      name: "Marini",
      role: "La Consolidación",
      desc: "Mantuvo viva la llama. Perfeccionó el servicio y convirtió la casa de comidas en un referente de la hostelería llanisca.",
      image: "https://picsum.photos/id/292/600/800" // Placeholder food prep
    },
    {
      year: "Hoy",
      name: "Carlos",
      role: "Tradición Renovada",
      desc: "Respeto por el producto local con técnica moderna. Una cocina que fusiona la memoria familiar con nuevos horizontes.",
      image: "https://picsum.photos/id/225/600/800" // Placeholder chef
    }
  ];

  return (
    <section id="historia" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">Tres Generaciones</h2>
          <div className="w-24 h-1 bg-ocean-700 mx-auto opacity-50 mb-6"></div>
          <p className="font-sans text-stone-600 max-w-2xl mx-auto">
            El Chiqui no es solo un restaurante, es la historia de nuestra familia contada a través de los platos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {generations.map((gen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-sm shadow-md aspect-[3/4] w-full max-w-[300px]">
                <img
                  src={gen.image}
                  alt={gen.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 bg-cream/90 px-3 py-1 font-serif text-lg font-bold">
                  {gen.year}
                </div>
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-1">{gen.name}</h3>
              <span className="text-xs uppercase tracking-widest text-ocean-700 mb-3 font-bold">{gen.role}</span>
              <p className="font-sans text-stone-600 text-sm leading-relaxed px-4">
                {gen.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
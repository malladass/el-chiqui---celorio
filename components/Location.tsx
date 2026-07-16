import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Button } from './Button';

export const Location: React.FC = () => {
  const reservationUrl = "https://mesamanager.es/r/el-chiqui";

  return (
    <section id="ubicacion" className="py-0 flex flex-col lg:grid lg:grid-cols-2">
      {/* Contact Info Side */}
      <div className="bg-stone-850 text-cream p-12 lg:p-24 flex flex-col justify-center">
        <h2 className="font-serif text-4xl mb-8">Visítanos</h2>

        <div className="space-y-8 font-sans font-light text-stone-300">
          <div className="flex items-start gap-4">
            <MapPin className="text-sand shrink-0 mt-1" />
            <div>
              <p className="text-white text-lg font-medium mb-1">Celorio, Llanes</p>
              <p>Camino Central, s/n</p>
              <p>33595 Asturias, España</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-sand shrink-0" />
            <div>
              <p className="text-white text-lg font-medium">985 400 308</p>
              <p className="text-sm opacity-70">Teléfono fijo</p>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="font-serif text-xl text-white mb-4">Horario</h3>
            <div className="space-y-1">
              <p><span className="text-white font-medium">Viernes:</span> 20:30 - 23:00</p>
              <p><span className="text-white font-medium">Sábado y Domingo:</span> 13:30 - 15:45 | 20:30 - 23:00</p>
            </div>
            <p className="text-sm mt-3 text-sand italic">Julio y Agosto: abierto todos los días</p>
          </div>

          <div className="pt-8">
            <Button href={reservationUrl} target="_blank" variant="secondary" className="w-full sm:w-auto">
              Reservar Mesa
            </Button>
          </div>
        </div>
      </div>

      {/* Map Side (Visual Placeholder that links to Google Maps) */}
      <div className="relative min-h-[400px] w-full h-full bg-stone-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1448.787731711388!2d-4.810011331901934!3d43.42769595629355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd493e6a7dad62e7%3A0x7195252b6be19e3d!2sEl%20Chiqui!5e0!3m2!1ses!2ses!4v1770310037761!5m2!1ses!2ses"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación El Chiqui"
        ></iframe>
      </div>
    </section>
  );
};
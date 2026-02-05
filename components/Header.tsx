import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // WhatsApp Link Logic
  const phoneNumber = "34620816621";
  const message = encodeURIComponent("Hola, quiero reservar una mesa en El Chiqui");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Historia', href: '#historia' },
    { name: 'La Carta', href: '#carta' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="El Chiqui Logo"
            className={`h-[60px] w-auto object-contain transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'
              }`}
          />
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold tracking-tight leading-none transition-colors duration-300 ${isScrolled ? 'text-stone-900' : 'text-white'
              }`}>
              El Chiqui
            </span>
            <span className={`text-[10px] uppercase tracking-widest font-sans transition-colors duration-300 ${isScrolled ? 'text-stone-500' : 'text-stone-200'
              }`}>
              Celorio • 1966
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-sm font-medium transition-colors uppercase tracking-wide ${isScrolled ? 'text-stone-600 hover:text-ocean-700' : 'text-white hover:text-stone-200'
                }`}
            >
              {link.name}
            </a>
          ))}
          <Button href={whatsappUrl} target="_blank" className="!px-5 !py-2 text-xs">
            Reservar
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-stone-900' : 'text-white'
            }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream border-t border-sand shadow-lg flex flex-col p-6 gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-serif text-2xl text-stone-800 hover:text-ocean-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-stone-200">
            <Button href={whatsappUrl} target="_blank" className="w-full justify-center flex">
              Reservar Mesa
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
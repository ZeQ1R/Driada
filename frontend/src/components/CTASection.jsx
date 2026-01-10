import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { translations, heroImages } from '../data/mock';

const CTASection = () => {
  const { language } = useTheme();
  const t = translations[language];

  const scrollToReservations = () => {
    const element = document.querySelector('#reservations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImages.main})` }}
      />
      
      {/* Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/85 to-[#1a3c34]/90" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-20 h-px bg-cream/50" />
          <div className="w-4 h-4 border-2 border-cream/50 rotate-45 mx-4" />
          <div className="w-20 h-px bg-cream/50" />
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
          After the slopes,<br />
          <span className="text-amber-400">the taste of tradition awaits.</span>
        </h2>

        <p className="text-cream/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          End your perfect day on the mountain with an unforgettable dining experience. 
          Reserve your table and let us take care of the rest.
        </p>

        {/* CTA Button */}
        {/* <button
          onClick={scrollToReservations}
          className="group bg-cream hover:bg-white text-[#1a3c34] font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cream/30 hover:scale-105"
        >
          {t.cta.reserveTable}
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </button> */}

        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-12">
          <div className="w-20 h-px bg-cream/50" />
          <div className="w-4 h-4 border-2 border-cream/50 rotate-45 mx-4" />
          <div className="w-20 h-px bg-cream/50" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;

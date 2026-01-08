import React, { useState, useEffect } from 'react';
import { ChevronDown, Play } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { translations, heroImages } from '../data/mock';

const HeroSection = () => {
  const { language } = useTheme();
  const t = translations[language];
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImages.main, heroImages.interior, heroImages.mountain];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images with Crossfade */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3c34]/60 via-[#1a3c34]/40 to-[#1a3c34]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c34]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Decorative Element */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-amber-400" />
            <span className="px-4 text-amber-400 text-sm tracking-[0.3em] uppercase font-medium">
              {t.hero.established}
            </span>
            <div className="w-16 h-px bg-amber-400" />
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-cream/90 text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#menu')}
              className="group bg-amber-400 hover:bg-amber-500 text-[#1a3c34] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/30 flex items-center gap-2"
            >
              {t.cta.viewMenu}
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={18} />
            </button>
            <button
              onClick={() => scrollToSection('#reservations')}
              className="group border-2 border-cream/80 hover:border-cream text-cream hover:bg-cream/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              {t.cta.reserveNow}
              <Play className="group-hover:scale-110 transition-transform" size={18} />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#dishes')}
            className="text-cream/70 hover:text-cream transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-10 right-10 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImage === index
                ? 'w-8 bg-amber-400'
                : 'bg-cream/50 hover:bg-cream/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

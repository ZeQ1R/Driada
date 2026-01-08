import React from 'react';
import { MapPin, Flame, Mountain, Eye } from 'lucide-react';
import { locationFeatures, heroImages, translations } from '../data/mock';
import { useTheme } from '../contexts/ThemeContext';

const LocationSection = () => {
  const { language } = useTheme();
  const t = translations[language];
  const iconMap = {
    ski: MapPin,
    fire: Flame,
    mountain: Mountain,
    view: Eye
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImages.mountain})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a3c34]/80" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium">
            {t.location.sectionLabel}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mt-4 mb-6">
            {t.location.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locationFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 border border-white/10 hover:border-amber-400/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="text-[#1a3c34]" size={28} />
                </div>
                <p className="text-cream text-lg font-medium">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Address Card */}
        <div className="mt-16 max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="text-amber-400" size={24} />
            <h3 className="font-serif text-2xl font-bold text-cream">Visit Us</h3>
          </div>
          <p className="text-cream/80 text-center text-lg">
            Alpine Valley Road 42, Near Ski Resort<br />
            Open daily from 12:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

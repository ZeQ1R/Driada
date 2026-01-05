import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { experienceContent, galleryImages } from '../data/mock';

const ExperienceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const interiorImages = galleryImages.filter(img => img.category === 'interior' || img.category === 'exterior');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % interiorImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [interiorImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % interiorImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
  };

  return (
    <section id="story" className="py-24 bg-[#1a3c34] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #f5f0e6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-left">
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium">
              Our Heritage
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mt-4 mb-8">
              {experienceContent.title}
            </h2>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-amber-400 mb-8" />
            
            <p className="text-cream/80 text-lg leading-relaxed mb-8">
              {experienceContent.description}
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {experienceContent.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4 text-cream/90">
                  <span className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Decorative Quote */}
            <div className="mt-12 p-6 border-l-4 border-amber-400 bg-white/5 rounded-r-lg">
              <p className="font-serif text-xl italic text-cream/90">
                "Where tradition meets the mountains, and every meal becomes a memory."
              </p>
              <p className="text-amber-400 mt-3 text-sm">— The Driada Family</p>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative animate-fade-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              {interiorImages.map((img, index) => (
                <div
                  key={img.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    currentSlide === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1a3c34] to-transparent">
                    <p className="text-cream font-medium">{img.caption}</p>
                  </div>
                </div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-cream transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-cream transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {interiorImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'w-8 bg-amber-400'
                      : 'bg-cream/30 hover:bg-cream/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-amber-400/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials, translations } from '../data/mock';
import { useTheme } from '../contexts/ThemeContext';

const TestimonialsSection = () => {
  const { language } = useTheme();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-amber-400/10">
        <Quote size={200} />
      </div>
      <div className="absolute bottom-20 right-10 text-amber-400/10 rotate-180">
        <Quote size={200} />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium">
            {t.testimonials.sectionLabel}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a3c34] mt-4 mb-6">
            {t.testimonials.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto" />
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-amber-400 fill-amber-400" size={24} />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="font-serif text-xl md:text-2xl text-[#1a3c34] leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Divider */}
                    <div className="w-16 h-px bg-amber-400 mx-auto mb-6" />

                    {/* Author */}
                    <div>
                      <p className="font-bold text-[#1a3c34] text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-[#1a3c34] hover:bg-[#2d5a4a] rounded-full flex items-center justify-center text-cream transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-[#1a3c34] hover:bg-[#2d5a4a] rounded-full flex items-center justify-center text-cream transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-amber-400 w-8'
                  : 'bg-[#1a3c34]/30 hover:bg-[#1a3c34]/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

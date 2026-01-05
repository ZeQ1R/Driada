import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { menuCategories } from '../data/mock';

const SeasonalMenu = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#1a3c34]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium">
            Taste the Mountains
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a3c34] mt-4 mb-6">
            Seasonal Menu
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-[#1a3c34] text-cream shadow-lg'
                  : 'bg-white text-[#1a3c34] hover:bg-[#1a3c34]/10 border border-[#1a3c34]/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-400 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-400 rounded-br-2xl" />

          <div className="space-y-0">
            {menuCategories[activeCategory].items.map((item, index) => (
              <div
                key={item.name}
                className={`group py-6 animate-fade-in ${
                  index !== menuCategories[activeCategory].items.length - 1
                    ? 'border-b border-gray-200'
                    : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-[#1a3c34] group-hover:text-amber-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Decorative Dots */}
                    <div className="hidden md:flex items-center gap-1">
                      {[...Array(20)].map((_, i) => (
                        <span key={i} className="w-1 h-1 rounded-full bg-gray-300" />
                      ))}
                    </div>
                    <span className="font-serif text-xl font-bold text-amber-600 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Menu Button */}
          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-3 bg-[#1a3c34] hover:bg-[#2d5a4a] text-cream font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg">
              <Download size={20} />
              Download Full Menu (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalMenu;

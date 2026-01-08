import React, { useState, useEffect } from 'react';
import { signatureDishes as mockDishes, translations } from '../data/mock';
import { getSignatureDishes } from '../services/api';
import { useTheme } from '../contexts/ThemeContext';

const SignatureDishes = () => {
  const { language } = useTheme();
  const t = translations[language];
  const [hoveredDish, setHoveredDish] = useState(null);
  const [dishes, setDishes] = useState(mockDishes);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const data = await getSignatureDishes();
        if (data && data.length > 0) {
          // Transform API data to match our format
          const formattedDishes = data.map(dish => ({
            id: dish.id,
            name: dish.name,
            description: dish.description,
            price: dish.price,
            image: dish.image || mockDishes[0]?.image
          }));
          setDishes(formattedDishes);
        }
      } catch (error) {
        console.error('Error fetching dishes, using mock data:', error);
        // Keep mock data on error
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  return (
    <section id="dishes" className="py-24 bg-cream relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a3c34' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium">
            Culinary Excellence
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a3c34] mt-4 mb-6">
            Our Signature Dishes
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto" />
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredDish(dish.id)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredDish === dish.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#1a3c34]/80 via-[#1a3c34]/20 to-transparent transition-opacity duration-500 ${
                  hoveredDish === dish.id ? 'opacity-100' : 'opacity-60'
                }`} />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-amber-400 text-[#1a3c34] font-bold px-4 py-2 rounded-full text-sm">
                  {dish.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#1a3c34] mb-3 group-hover:text-amber-700 transition-colors">
                  {dish.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-amber-400 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                hoveredDish === dish.id ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/mock';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-24 bg-[#1a3c34]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mt-4 mb-6">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto" />
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`aspect-square ${
                index === 0 || index === 5 ? 'md:aspect-[4/3]' : ''
              }`}>
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c34] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-cream font-serif text-xl font-medium">
                    {image.caption}
                  </p>
                  <p className="text-amber-400 text-sm mt-1 capitalize">
                    {image.category}
                  </p>
                </div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-amber-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          <div 
            className="max-w-5xl max-h-[85vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-cream font-serif text-xl">{selectedImage.caption}</p>
              <p className="text-amber-400 text-sm mt-1 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;

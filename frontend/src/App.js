import React, { useEffect, useRef } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SignatureDishes from './components/SignatureDishes';
import ExperienceSection from './components/ExperienceSection';
import SeasonalMenu from './components/SeasonalMenu';
import LocationSection from './components/LocationSection';
import GallerySection from './components/GallerySection';
import ReservationsSection from './components/ReservationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import WeatherWidget from './components/WeatherWidget';
import Footer from './components/Footer';
import SnowParticles from './components/SnowParticles';
import './App.css';

// Ambient Sound Component
const AmbientSound = () => {
  const audioRef = useRef(null);
  const { soundEnabled, season } = useTheme();

  useEffect(() => {
    if (audioRef.current) {
      if (soundEnabled) {
        audioRef.current.play().catch(() => {
          // Autoplay blocked, user interaction required
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [soundEnabled]);

  // Using a simple tone for demo - in production, use actual audio files
  return (
    <audio
      ref={audioRef}
      loop
      volume={0.3}
      src={season === 'winter' 
        ? 'https://assets.mixkit.co/sfx/preview/mixkit-fireplace-ambience-1507.mp3'
        : 'https://assets.mixkit.co/sfx/preview/mixkit-forest-birds-ambience-1210.mp3'
      }
    />
  );
};

const AppContent = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Snow/Particle Effects */}
      <SnowParticles />
      
      {/* Ambient Sound */}
      <AmbientSound />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <SignatureDishes />
        <ExperienceSection />
        <SeasonalMenu />
        <LocationSection />
        <GallerySection />
        {/* <ReservationsSection /> */}
        <TestimonialsSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Weather Widget */}
      <WeatherWidget />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

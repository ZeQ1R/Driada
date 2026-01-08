import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Volume2, VolumeX, Sun, Snowflake } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { navigation, translations } from '../data/mock';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { season, toggleSeason, language, setLanguage, soundEnabled, toggleSound } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language];
  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.menu, href: '#menu' },
    { name: t.nav.story, href: '#story' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.reservations, href: '#reservations' },
    { name: t.nav.contact, href: '#contact' }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'sq', name: 'Shqip' },
    { code: 'mk', name: 'Македонски' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#1a3c34]/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <span className="font-serif text-2xl md:text-3xl font-bold text-cream tracking-wider">
              DRIADA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-cream/90 hover:text-cream font-medium text-sm tracking-wide transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="p-2 text-cream/80 hover:text-cream transition-colors rounded-full hover:bg-white/10"
                aria-label="Select language"
              >
                <Globe size={20} />
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-36 bg-[#1a3c34] rounded-lg shadow-xl border border-cream/20 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                        language === lang.code
                          ? 'bg-amber-400/20 text-amber-400'
                          : 'text-cream/80 hover:bg-white/10 hover:text-cream'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Season Toggle */}
            <button
              onClick={toggleSeason}
              className="p-2 text-cream/80 hover:text-cream transition-colors rounded-full hover:bg-white/10"
              aria-label="Toggle season theme"
            >
              {season === 'winter' ? <Snowflake size={20} /> : <Sun size={20} />}
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 text-cream/80 hover:text-cream transition-colors rounded-full hover:bg-white/10"
              aria-label="Toggle ambient sound"
            >
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>

            {/* Reserve Button */}
            <button
              onClick={() => scrollToSection('#reservations')}
              className="hidden md:block bg-amber-400 hover:bg-amber-500 text-[#1a3c34] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30 text-sm"
            >
              {t.cta.reserveTable}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-cream"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-[#1a3c34]/98 backdrop-blur-md transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 border-t border-cream/10' : 'max-h-0'
      }`}>
        <div className="px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left text-cream/90 hover:text-cream py-2 font-medium transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#reservations')}
            className="w-full bg-amber-400 hover:bg-amber-500 text-[#1a3c34] font-semibold px-5 py-3 rounded-full transition-all duration-300 mt-4"
          >
            {t.cta.reserveTable}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

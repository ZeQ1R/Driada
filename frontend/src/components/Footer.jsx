import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { restaurantInfo, translations } from '../data/mock';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { language } = useTheme();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#1a3c34] relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold text-cream mb-4">
              DRIADA
            </h3>
            <p className="text-cream/70 leading-relaxed mb-6">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/driada.restaurant/" 
                className="w-10 h-10 bg-white/10 hover:bg-amber-400 rounded-full flex items-center justify-center text-cream hover:text-[#1a3c34] transition-all duration-300"
                aria-label="Instagram"
                target="_blank" rel="noopener noreferrer  "
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/DriadaRestaurant/" 
                className="w-10 h-10 bg-white/10 hover:bg-amber-400 rounded-full flex items-center justify-center text-cream hover:text-[#1a3c34] transition-all duration-300"
                aria-label="Facebook"
                target="_blank" rel="noopener noreferrer  "
              >
                <Facebook size={18} />
              </a>
              {/* <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-amber-400 rounded-full flex items-center justify-center text-cream hover:text-[#1a3c34] transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a> */}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-cream font-bold text-lg mb-6">{t.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/70">
                <MapPin className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Phone className="text-amber-400" size={18} />
                <span>{restaurantInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Mail className="text-amber-400" size={18} />
                <span>{restaurantInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-cream font-bold text-lg mb-6">{t.footer.openingHours}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/70">
                <Clock className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-medium text-cream">{t.footer.weekdays}</p>
                  <p>{restaurantInfo.hours.weekdays}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-cream/70">
                <Clock className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-medium text-cream">{t.footer.weekends}</p>
                  <p>{restaurantInfo.hours.weekends}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-bold text-lg mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { key: 'menu', href: 'menu' },
                { key: 'story', href: 'story' },
                { key: 'gallery', href: 'gallery' },
                { key: 'reservations', href: 'reservations' },
                { key: 'privateEvents', href: 'private-events' }
              ].map((link) => (
                <li key={link.key}>
                  <a 
                    href={`#${link.href}`}
                    className="text-cream/70 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-amber-400 group-hover:w-4 transition-all duration-300" />
                    {t.footer.links[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {currentYear} {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-cream/50 hover:text-cream text-sm transition-colors">
                Produced by Zeqir Xheladini
              </a>
              
            </div>
            {/* <div className="flex gap-6">
              <a href="#" className="text-cream/50 hover:text-cream text-sm transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-cream/50 hover:text-cream text-sm transition-colors">
                {t.footer.terms}
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare, CheckCircle } from 'lucide-react';
import { heroImages } from '../data/mock';

const ReservationsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: ''
      });
    }, 3000);
  };

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  return (
    <section id="reservations" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImages.interior})` }}
      />
      
      {/* Warm Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3c34]/95 via-[#1a3c34]/90 to-amber-900/50" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium">
            Book Your Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mt-4 mb-6">
            Reservations
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto" />
          <p className="text-cream/80 mt-6 max-w-xl mx-auto">
            Reserve your table and prepare for an unforgettable alpine dining experience.
          </p>
        </div>

        {/* Reservation Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
          {isSubmitted ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream mb-3">
                Reservation Confirmed!
              </h3>
              <p className="text-cream/80">
                We've sent a confirmation to your email. See you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cream/90 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream placeholder:text-cream/50 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-cream/90 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream placeholder:text-cream/50 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-cream/90 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream placeholder:text-cream/50 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Date, Time, Guests Row */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-cream/90 text-sm font-medium mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-amber-400 transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-cream/90 text-sm font-medium mb-2">
                    <Clock size={16} className="inline mr-2" />
                    Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-amber-400 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1a3c34]">Select time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot} className="bg-[#1a3c34]">{slot}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-cream/90 text-sm font-medium mb-2">
                    <Users size={16} className="inline mr-2" />
                    Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-amber-400 transition-colors appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num} className="bg-[#1a3c34]">
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                    <option value="9+" className="bg-[#1a3c34]">9+ (Large Party)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-cream/90 text-sm font-medium mb-2">
                  <MessageSquare size={16} className="inline mr-2" />
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-cream placeholder:text-cream/50 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  placeholder="Allergies, special occasions, seating preferences..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-[#1a3c34] font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30 text-lg"
              >
                Confirm Reservation
              </button>

              <p className="text-cream/60 text-sm text-center">
                By reserving, you agree to our booking policy. We'll contact you to confirm.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReservationsSection;

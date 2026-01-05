import React from 'react';
import { Cloud, Snowflake, Mountain, Wind, Eye, ChevronDown } from 'lucide-react';
import { weatherData } from '../data/mock';

const WeatherWidget = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Collapsed View */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#1a3c34]/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/10 flex items-center gap-3 hover:bg-[#1a3c34] transition-colors group"
      >
        <div className="flex items-center gap-2">
          <Snowflake className="text-amber-400" size={20} />
          <span className="text-cream font-bold text-lg">{weatherData.temperature}°C</span>
        </div>
        <div className="w-px h-6 bg-cream/20" />
        <div className="flex items-center gap-2">
          <Mountain className="text-cream/70" size={18} />
          <span className="text-cream/80 text-sm">{weatherData.snowDepth}</span>
        </div>
        <ChevronDown 
          className={`text-cream/70 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
          size={18} 
        />
      </button>

      {/* Expanded View */}
      {isExpanded && (
        <div className="absolute bottom-full left-0 mb-3 bg-[#1a3c34]/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 min-w-[280px] animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-cream font-serif font-bold text-lg">Ski Conditions</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              weatherData.slopeStatus === 'Open' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-red-500/20 text-red-400'
            }`}>
              Slopes {weatherData.slopeStatus}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Cloud className="text-amber-400" size={20} />
              <div>
                <p className="text-cream/60 text-xs">Condition</p>
                <p className="text-cream font-medium">{weatherData.condition}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Snowflake className="text-amber-400" size={20} />
              <div>
                <p className="text-cream/60 text-xs">Snow Depth</p>
                <p className="text-cream font-medium">{weatherData.snowDepth}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Eye className="text-amber-400" size={20} />
              <div>
                <p className="text-cream/60 text-xs">Visibility</p>
                <p className="text-cream font-medium">{weatherData.visibility}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Wind className="text-amber-400" size={20} />
              <div>
                <p className="text-cream/60 text-xs">Wind</p>
                <p className="text-cream font-medium">{weatherData.wind}</p>
              </div>
            </div>
          </div>

          <p className="text-cream/50 text-xs mt-4 text-center">
            Updated hourly • Near Ski Resort
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;

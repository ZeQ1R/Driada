// import React, { useState, useEffect } from 'react';
// import { Cloud, Snowflake, Mountain, Wind, Eye, ChevronDown } from 'lucide-react';
// import { weatherData as mockWeather } from '../data/mock';
// import { getWeather } from '../services/api';

// const WeatherWidget = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [weatherData, setWeatherData] = useState(mockWeather);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const data = await getWeather();
//         if (data) {
//           setWeatherData({
//             temperature: data.temperature,
//             condition: data.condition,
//             snowDepth: data.snow_depth,
//             slopeStatus: data.slope_status,
//             visibility: data.visibility,
//             wind: data.wind
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching weather, using mock data:', error);
//       }
//     };

//     fetchWeather();
//     // Refresh weather every 5 minutes
//     const interval = setInterval(fetchWeather, 5 * 60 * 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed bottom-6 left-6 z-40">
//       {/* Collapsed View */}
//       <button
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="bg-[#1a3c34]/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/10 flex items-center gap-3 hover:bg-[#1a3c34] transition-colors group"
//       >
//         <div className="flex items-center gap-3">
//           <div className="flex items-center gap-2">
//             <Snowflake className="text-amber-400" size={20} />
//             <span className="text-cream font-bold text-lg">{weatherData.temperature}°C</span>
//           </div>
//           <div className="w-px h-6 bg-cream/20" />
//           <div className="flex items-center gap-2">
//             <Mountain className="text-cream/70" size={18} />
//             <span className="text-cream/80 text-sm">{weatherData.snowDepth}</span>
//           </div>
//           <ChevronDown 
//             className={`text-cream/70 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
//             size={18} 
//           />
//         </div>
//       </button>

//       {/* Expanded View */}
//       {isExpanded && (
//         <div className="absolute bottom-full left-0 mb-3 bg-[#1a3c34]/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 min-w-[280px] animate-fade-in-up">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-cream font-serif font-bold text-lg">Ski Conditions</h3>
//             <span className={`px-3 py-1 rounded-full text-xs font-bold ${
//               weatherData.slopeStatus === 'Open' 
//                 ? 'bg-green-500/20 text-green-400' 
//                 : 'bg-red-500/20 text-red-400'
//             }`}>
//               Slopes {weatherData.slopeStatus}
//             </span>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex items-center gap-3">
//               <Cloud className="text-amber-400" size={20} />
//               <div>
//                 <p className="text-cream/60 text-xs">Condition</p>
//                 <p className="text-cream font-medium">{weatherData.condition}</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <Snowflake className="text-amber-400" size={20} />
//               <div>
//                 <p className="text-cream/60 text-xs">Snow Depth</p>
//                 <p className="text-cream font-medium">{weatherData.snowDepth}</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <Eye className="text-amber-400" size={20} />
//               <div>
//                 <p className="text-cream/60 text-xs">Visibility</p>
//                 <p className="text-cream font-medium">{weatherData.visibility}</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <Wind className="text-amber-400" size={20} />
//               <div>
//                 <p className="text-cream/60 text-xs">Wind</p>
//                 <p className="text-cream font-medium">{weatherData.wind}</p>
//               </div>
//             </div>
//           </div>

//           <p className="text-cream/50 text-xs mt-4 text-center">
//             Updated hourly • Near Ski Resort
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherWidget;


import React, { useState, useEffect } from 'react';
import { Cloud, Snowflake, Mountain, Wind, Eye, ChevronDown, Sun, CloudRain, CloudLightning } from 'lucide-react';

// Configuration for Tetovo (Popova Šapka Coordinates)
const API_KEY = 'f575e23b0fc180117fb0efd628cc123c'; 
const LAT = '42.0150';
const LON = '20.8900';

const WeatherWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({
    temperature: '--',
    condition: 'Loading...',
    snowDepth: '--',
    slopeStatus: 'Checking...',
    visibility: '--',
    wind: '--'
  });

  // Helper to map weather conditions to Icons
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear': return <Sun className="text-amber-400" size={20} />;
      case 'Clouds': return <Cloud className="text-gray-300" size={20} />;
      case 'Rain': case 'Drizzle': return <CloudRain className="text-blue-400" size={20} />;
      case 'Snow': return <Snowflake className="text-cyan-300" size={20} />;
      case 'Thunderstorm': return <CloudLightning className="text-purple-400" size={20} />;
      default: return <Cloud className="text-amber-400" size={20} />;
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data && data.main) {
        setWeatherData({
          temperature: Math.round(data.main.temp),
          condition: data.weather[0].main,
          // If no active snow, show a placeholder for the season
          snowDepth: data.snow ? `${data.snow['1h'] || 0}mm` : '45cm', 
          slopeStatus: data.main.temp < 5 ? 'Open' : 'Limited',
          visibility: `${(data.visibility / 1000).toFixed(1)}km`,
          wind: `${Math.round(data.wind.speed * 3.6)} km/h`
        });
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 5 * 60 * 1000); // Refresh every 5 mins
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Collapsed View */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-[#1a3c34]/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/10 flex items-center gap-3 hover:bg-[#1a3c34] transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {getWeatherIcon(weatherData.condition)}
            <span className="text-cream font-bold text-lg">
                {loading ? '...' : `${weatherData.temperature}°C`}
            </span>
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
        </div>
      </button>

      {/* Expanded View */}
      {isExpanded && (
        <div className="absolute bottom-full left-0 mb-3 bg-[#1a3c34]/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 min-w-[280px] animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-cream font-serif font-bold text-lg">Ski Conditions</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              weatherData.slopeStatus === 'Open' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-yellow-500/20 text-yellow-400'
            }`}>
              Slopes {weatherData.slopeStatus}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              {getWeatherIcon(weatherData.condition)}
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
            Updated Real-time • Popova Šapka, Tetovo
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
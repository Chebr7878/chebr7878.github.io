import React, { useEffect, useState } from 'react';

const CloudBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Облака */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800">
        <defs>
          <filter id="cloud-blur">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        
        {/* Облако 1 */}
        <g transform="translate(100, 50)">
          <ellipse cx="60" cy="40" rx="50" ry="30" fill="#e5e7eb" opacity="0.7"/>
          <ellipse cx="40" cy="35" rx="35" ry="25" fill="#d1d5db" opacity="0.6"/>
          <ellipse cx="80" cy="45" rx="30" ry="20" fill="#f3f4f6" opacity="0.8"/>
        </g>
        
        {/* Облако 2 */}
        <g transform="translate(400, 120)">
          <ellipse cx="70" cy="50" rx="60" ry="35" fill="#e5e7eb" opacity="0.6"/>
          <ellipse cx="50" cy="45" rx="40" ry="30" fill="#d1d5db" opacity="0.5"/>
          <ellipse cx="90" cy="55" rx="35" ry="25" fill="#f3f4f6" opacity="0.7"/>
        </g>
        
        {/* Облако 3 */}
        <g transform="translate(700, 80)">
          <ellipse cx="55" cy="35" rx="45" ry="25" fill="#e5e7eb" opacity="0.8"/>
          <ellipse cx="35" cy="30" rx="30" ry="20" fill="#d1d5db" opacity="0.6"/>
          <ellipse cx="75" cy="40" rx="25" ry="15" fill="#f3f4f6" opacity="0.9"/>
        </g>
        
        {/* Облако 4 */}
        <g transform="translate(200, 300)">
          <ellipse cx="65" cy="45" rx="55" ry="30" fill="#e5e7eb" opacity="0.5"/>
          <ellipse cx="45" cy="40" rx="35" ry="25" fill="#d1d5db" opacity="0.4"/>
          <ellipse cx="85" cy="50" rx="30" ry="20" fill="#f3f4f6" opacity="0.6"/>
        </g>
        
        {/* Облако 5 */}
        <g transform="translate(600, 350)">
          <ellipse cx="60" cy="40" rx="50" ry="30" fill="#e5e7eb" opacity="0.7"/>
          <ellipse cx="40" cy="35" rx="35" ry="25" fill="#d1d5db" opacity="0.6"/>
          <ellipse cx="80" cy="45" rx="30" ry="20" fill="#f3f4f6" opacity="0.8"/>
        </g>
        
        {/* Облако 6 */}
        <g transform="translate(900, 280)">
          <ellipse cx="70" cy="50" rx="60" ry="35" fill="#e5e7eb" opacity="0.6"/>
          <ellipse cx="50" cy="45" rx="40" ry="30" fill="#d1d5db" opacity="0.5"/>
          <ellipse cx="90" cy="55" rx="35" ry="25" fill="#f3f4f6" opacity="0.7"/>
        </g>
        
        {/* Облако 7 */}
        <g transform="translate(150, 550)">
          <ellipse cx="55" cy="35" rx="45" ry="25" fill="#e5e7eb" opacity="0.8"/>
          <ellipse cx="35" cy="30" rx="30" ry="20" fill="#d1d5db" opacity="0.6"/>
          <ellipse cx="75" cy="40" rx="25" ry="15" fill="#f3f4f6" opacity="0.9"/>
        </g>
        
        {/* Облако 8 */}
        <g transform="translate(500, 600)">
          <ellipse cx="65" cy="45" rx="55" ry="30" fill="#e5e7eb" opacity="0.5"/>
          <ellipse cx="45" cy="40" rx="35" ry="25" fill="#d1d5db" opacity="0.4"/>
          <ellipse cx="85" cy="50" rx="30" ry="20" fill="#f3f4f6" opacity="0.6"/>
        </g>
        
        {/* Облако 9 */}
        <g transform="translate(800, 650)">
          <ellipse cx="60" cy="40" rx="50" ry="30" fill="#e5e7eb" opacity="0.7"/>
          <ellipse cx="40" cy="35" rx="35" ry="25" fill="#d1d5db" opacity="0.6"/>
          <ellipse cx="80" cy="45" rx="30" ry="20" fill="#f3f4f6" opacity="0.8"/>
        </g>
      </svg>
      
      {/* Формулы с анимацией прокрутки */}
      <div className="absolute inset-0">
        {/* Химические формулы */}
        <div 
          className="absolute top-20 left-20 transform rotate-12 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(12deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">Ca(OH)₂</span>
        </div>
        
        <div 
          className="absolute top-40 right-32 transform -rotate-8 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.15}px) rotate(-8deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">SiO₂</span>
        </div>
        
        <div 
          className="absolute top-80 left-1/4 transform rotate-3 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.12}px) rotate(3deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">Al₂O₃</span>
        </div>
        
        <div 
          className="absolute top-120 right-1/3 transform -rotate-15 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.08}px) rotate(-15deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">Fe₂O₃</span>
        </div>
        
        {/* Физические формулы */}
        <div 
          className="absolute top-200 left-16 transform rotate-5 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.18}px) rotate(5deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">σ = F/A</span>
        </div>
        
        <div 
          className="absolute top-250 right-20 transform -rotate-12 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.22}px) rotate(-12deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">ρ = m/V</span>
        </div>
        
        <div 
          className="absolute top-300 left-1/3 transform rotate-8 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.14}px) rotate(8deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">E = σ/ε</span>
        </div>
        
        {/* Формулы ГОСТ */}
        <div 
          className="absolute top-400 right-1/4 transform -rotate-6 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.16}px) rotate(-6deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">B = 0.8R</span>
        </div>
        
        <div 
          className="absolute top-450 left-2/3 transform rotate-10 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.11}px) rotate(10deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">W = 0.6B</span>
        </div>
        
        <div 
          className="absolute top-500 left-1/6 transform -rotate-8 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.19}px) rotate(-8deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">L = 2.5D</span>
        </div>
        
        {/* Дополнительные формулы */}
        <div 
          className="absolute top-600 right-1/6 transform rotate-15 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.13}px) rotate(15deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">C₃S + H₂O</span>
        </div>
        
        <div 
          className="absolute top-650 left-1/2 transform -rotate-5 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * -0.17}px) rotate(-5deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">C₂S + H₂O</span>
        </div>
        
        <div 
          className="absolute top-700 right-1/2 transform rotate-12 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.09}px) rotate(12deg)` }}
        >
          <span className="text-gray-600 text-lg font-mono opacity-40">C₃A + H₂O</span>
        </div>
      </div>

      {/* Чертежи труб с анимацией */}
      <div className="absolute inset-0">
        {/* Чертеж трубы 1 - горизонтальный */}
        <svg 
          className="absolute top-50 left-10 transform transition-transform duration-1000" 
          width="120" 
          height="60" 
          viewBox="0 0 120 60"
          style={{ transform: `translateY(${scrollY * 0.2}px) rotate(5deg)` }}
        >
          <rect x="0" y="20" width="120" height="20" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.3"/>
          <rect x="0" y="25" width="120" height="10" fill="none" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <line x1="0" y1="30" x2="120" y2="30" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <text x="60" y="15" textAnchor="middle" className="text-xs fill-gray-600 opacity-30">Ø1200</text>
        </svg>

        {/* Чертеж трубы 2 - вертикальный */}
        <svg 
          className="absolute top-150 right-20 transform transition-transform duration-1000" 
          width="60" 
          height="100" 
          viewBox="0 0 60 100"
          style={{ transform: `translateY(${scrollY * -0.25}px) rotate(-12deg)` }}
        >
          <rect x="20" y="0" width="20" height="100" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.3"/>
          <rect x="25" y="0" width="10" height="100" fill="none" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <line x1="30" y1="0" x2="30" y2="100" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <text x="30" y="50" textAnchor="middle" className="text-xs fill-gray-600 opacity-30" transform="rotate(-90 30 50)">L=5000</text>
        </svg>

        {/* Чертеж трубы 3 - с раструбом */}
        <svg 
          className="absolute top-250 left-1/3 transform transition-transform duration-1000" 
          width="140" 
          height="60" 
          viewBox="0 0 140 60"
          style={{ transform: `translateY(${scrollY * 0.16}px) rotate(8deg)` }}
        >
          <rect x="40" y="20" width="100" height="20" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.3"/>
          <path d="M 0 20 L 40 15 L 40 45 L 0 40 Z" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.3"/>
          <rect x="45" y="25" width="90" height="10" fill="none" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <text x="70" y="15" textAnchor="middle" className="text-xs fill-gray-600 opacity-30">Тип Т</text>
        </svg>

        {/* Чертеж трубы 4 - сечение */}
        <svg 
          className="absolute top-350 right-1/4 transform transition-transform duration-1000" 
          width="80" 
          height="80" 
          viewBox="0 0 80 80"
          style={{ transform: `translateY(${scrollY * -0.18}px) rotate(-15deg)` }}
        >
          <circle cx="40" cy="40" r="35" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.3"/>
          <circle cx="40" cy="40" r="25" fill="none" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <line x1="5" y1="40" x2="75" y2="40" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <line x1="40" y1="5" x2="40" y2="75" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <text x="40" y="20" textAnchor="middle" className="text-xs fill-gray-600 opacity-30">Ø1660</text>
        </svg>

        {/* Чертеж трубы 5 - профиль */}
        <svg 
          className="absolute top-450 left-1/6 transform transition-transform duration-1000" 
          width="100" 
          height="40" 
          viewBox="0 0 100 40"
          style={{ transform: `translateY(${scrollY * 0.22}px) rotate(3deg)` }}
        >
          <rect x="0" y="10" width="100" height="20" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.3"/>
          <rect x="0" y="15" width="100" height="10" fill="none" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <line x1="0" y1="20" x2="100" y2="20" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <text x="50" y="8" textAnchor="middle" className="text-xs fill-gray-600 opacity-30">Профиль</text>
        </svg>

        {/* Чертеж трубы 6 - изометрия */}
        <svg 
          className="absolute top-550 right-1/6 transform transition-transform duration-1000" 
          width="120" 
          height="80" 
          viewBox="0 0 120 80"
          style={{ transform: `translateY(${scrollY * -0.14}px) rotate(-8deg)` }}
        >
          <ellipse cx="60" cy="40" rx="50" ry="20" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.3"/>
          <ellipse cx="60" cy="40" rx="35" ry="15" fill="none" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <line x1="10" y1="40" x2="110" y2="40" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <text x="60" y="25" textAnchor="middle" className="text-xs fill-gray-600 opacity-30">Изометрия</text>
        </svg>

        {/* Чертеж трубы 7 - деталь соединения */}
        <svg 
          className="absolute top-650 left-1/2 transform transition-transform duration-1000" 
          width="100" 
          height="60" 
          viewBox="0 0 100 60"
          style={{ transform: `translateY(${scrollY * 0.19}px) rotate(12deg)` }}
        >
          <rect x="0" y="20" width="40" height="20" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.3"/>
          <rect x="60" y="20" width="40" height="20" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.3"/>
          <path d="M 40 20 L 60 15 L 60 45 L 40 40 Z" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.3"/>
          <text x="50" y="15" textAnchor="middle" className="text-xs fill-gray-600 opacity-30">Стык</text>
        </svg>

        {/* Чертеж трубы 8 - размеры */}
        <svg 
          className="absolute top-750 right-1/3 transform transition-transform duration-1000" 
          width="140" 
          height="50" 
          viewBox="0 0 140 50"
          style={{ transform: `translateY(${scrollY * -0.21}px) rotate(-5deg)` }}
        >
          <rect x="20" y="15" width="100" height="20" fill="none" stroke="#6b7280" strokeWidth="1" opacity="0.3"/>
          <line x1="20" y1="5" x2="20" y2="45" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <line x1="120" y1="5" x2="120" y2="45" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <line x1="20" y1="5" x2="120" y2="5" stroke="#6b7280" strokeWidth="0.5" opacity="0.2"/>
          <text x="70" y="12" textAnchor="middle" className="text-xs fill-gray-600 opacity-30">5000</text>
        </svg>
      </div>
    </div>
  );
};

export default CloudBackground;

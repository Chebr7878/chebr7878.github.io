import React from 'react';

const CloudBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Фоновое изображение облаков */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/Фотооблака.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
          filter: 'blur(1px)',
        }}
      />
      
      {/* Дополнительный слой для улучшения видимости текста */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(240, 248, 255, 0.05) 100%)',
        }}
      />
      
      {/* Облачный оверлей для дополнительного эффекта */}
      <div className="cloud-overlay" />
    </div>
  );
};

export default CloudBackground;

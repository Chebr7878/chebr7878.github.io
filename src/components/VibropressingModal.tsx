import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface VibropressingModalProps {
  isOpen: boolean;
  imageType: string | null;
  onClose: () => void;
}

export default function VibropressingModal({ isOpen, imageType, onClose }: VibropressingModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { 
      src: '/вибропрес1.jpg', 
      title: 'Вибропресс 1',
      alt: 'Вибропресс для изготовления железобетонных труб'
    },
    { 
      src: '/вибропрес2.jpg', 
      title: 'Вибропресс 2',
      alt: 'Вибропресс для производства труб методом вибропрессования'
    },
    { 
      src: '/вибропрес3.jpg', 
      title: 'Вибропресс 3',
      alt: 'Современный вибропресс для высококачественных труб'
    },
  ];

  useEffect(() => {
    if (isOpen && imageType) {
      // Определяем индекс изображения по типу
      const imageMap = {
        'vibropress-1': 0,
        'vibropress-2': 1,
        'vibropress-3': 2,
      };
      const index = imageMap[imageType as keyof typeof imageMap] || 0;
      setCurrentImageIndex(index);
    }
  }, [isOpen, imageType]);

  useEffect(() => {
    if (isOpen) {
      // Обработчик клавиш для навигации
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        } else if (e.key === 'ArrowLeft') {
          setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
        } else if (e.key === 'ArrowRight') {
          setCurrentImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose, images.length]);

  if (!isOpen) return null;

  const goToPrevious = () => {
    setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
                 <button
           onClick={onClose}
           className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
         >
           <X className="w-5 h-5" />
         </button>
         
         {/* Подсказка по управлению */}
         <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-xs">
           Кликните вне изображения для закрытия
         </div>

        {/* Навигационные стрелки */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {images[currentImageIndex].title}
            </h2>
                         <div className="relative inline-block">
               <OptimizedImage
                 src={images[currentImageIndex].src}
                 alt={images[currentImageIndex].alt}
                 className="max-w-full h-auto rounded-lg shadow-lg"
                 style={{ maxHeight: '70vh' }}
               />
             </div>
                         <div className="mt-4 text-sm text-gray-600">
               {currentImageIndex + 1} из {images.length}
             </div>
             
             {/* Подсказка по управлению */}
             <div className="mt-2 text-xs text-gray-500">
               Кликните вне изображения или нажмите ESC для закрытия
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

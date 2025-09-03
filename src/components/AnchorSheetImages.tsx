import { useState, useEffect } from 'react';

interface AnchorSheetImagesProps {
  onOpenImage?: (imageType: string) => void;
}

export default function AnchorSheetImages({ onOpenImage }: AnchorSheetImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      type: 'anchor-sheet-1',
      name: 'Анкерный лист V-Lock',
      src: '/Анкерныйлист1.png',
      alt: 'Анкерный лист с V-образными анкерами'
    },
    {
      type: 'anchor-sheet-2',
      name: 'Анкерный лист V-Lock',
      src: '/Анкерныйлист2.png',
      alt: 'Анкерный лист с V-образными анкерами'
    }
  ];

  const openImageModal = (imageType: string) => {
    const index = images.findIndex(img => img.type === imageType);
    if (index !== -1) {
      setCurrentImageIndex(index);
      setIsModalOpen(true);
    }
  };

  const navigateToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const navigateToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Обработчик клавиш для навигации
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          navigateToPrevImage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          navigateToNextImage();
          break;
        case 'Escape':
          event.preventDefault();
          closeModal();
          break;
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg">
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center text-gray-800">
          Фотографии анкерных листов
        </h3>
        <div className="flex justify-center items-center gap-3">
          {images.map((image) => (
            <button
              key={image.type}
              onClick={() => {
                console.log('Anchor sheet button clicked:', image.type);
                openImageModal(image.type);
              }}
              className="px-3 py-2 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-md"
              style={{ minWidth: '100px' }}
            >
              {image.name}
            </button>
          ))}
        </div>
      </div>

      {/* Модальное окно для просмотра изображений */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-200"
            >
              ×
            </button>

            {/* Кнопки навигации */}
            <button
              onClick={navigateToPrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-200"
              title="Предыдущее изображение (←)"
            >
              ‹
            </button>

            <button
              onClick={navigateToNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-200"
              title="Следующее изображение (→)"
            >
              ›
            </button>

            {/* Изображение */}
            <div className="relative">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Индикатор текущего изображения */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-white' 
                        : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Название изображения */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
              {images[currentImageIndex].name}
            </div>

            {/* Подсказка по управлению */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-xs">
              Используйте стрелки ← → для навигации
            </div>
          </div>
        </div>
      )}
    </>
  );
}

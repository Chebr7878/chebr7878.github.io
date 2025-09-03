import { useEffect, useState } from 'react';

interface DrawingModalProps {
  isOpen: boolean;
  drawingType: string | null;
  onClose: () => void;
  onNavigateToDrawing?: (drawingType: string) => void;
}

export default function DrawingModal({ isOpen, drawingType, onClose, onNavigateToDrawing }: DrawingModalProps) {
  const [modalContent, setModalContent] = useState<string>('');
  const [isZoomed, setIsZoomed] = useState(false);

  // Массив типов труб для навигации
  const pipeTypes = ['t', 'ts', 'tb', 'tbp-tsp', 'tf', 'tfp'];

  // Функция для перехода к следующему типу трубы
  const navigateToNextDrawing = () => {
    if (!drawingType || !onNavigateToDrawing) return;
    
    const currentIndex = pipeTypes.indexOf(drawingType);
    if (currentIndex === -1) return;
    
    const nextIndex = (currentIndex + 1) % pipeTypes.length;
    onNavigateToDrawing(pipeTypes[nextIndex]);
  };

  // Функция для перехода к предыдущему типу трубы
  const navigateToPrevDrawing = () => {
    if (!drawingType || !onNavigateToDrawing) return;
    
    const currentIndex = pipeTypes.indexOf(drawingType);
    if (currentIndex === -1) return;
    
    const prevIndex = currentIndex === 0 ? pipeTypes.length - 1 : currentIndex - 1;
    onNavigateToDrawing(pipeTypes[prevIndex]);
  };

  // Обработчик клавиш для навигации
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen || !onNavigateToDrawing) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          navigateToPrevDrawing();
          break;
        case 'ArrowRight':
          event.preventDefault();
          navigateToNextDrawing();
          break;
        case 'Escape':
          event.preventDefault();
          onClose();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, drawingType, onNavigateToDrawing, onClose]);

  useEffect(() => {
    console.log('DrawingModal useEffect:', { isOpen, drawingType });
    if (isOpen && drawingType) {
      console.log('Setting modal content for:', drawingType);
      
      const titles = {
        't': 'Чертеж трубы типа Т',
        'ts': 'Чертеж трубы типа ТС',
        'tb': 'Чертеж трубы типа ТБ',
        'tbp-tsp': 'Чертеж труб типа ТБП/ТСП',
        'tf': 'Чертеж трубы типа ТФ',
        'tfp': 'Чертеж трубы типа ТФП'
      };
      
      const images = {
        't': '/pipe-type-t-drawing.png', // Чертеж типа Т
        'ts': '/pipe-type-ts-drawing.png', // Чертеж типа ТС
        'tb': '/pipe-type-tb-drawing.png', // Чертеж типа ТБ
        'tbp-tsp': '/pipe-type-tbp-i-tsp-drawing.png', // Чертеж типа ТБП/ТСП
        'tf': '/pipe-type-tf-drawing.png', // Чертеж типа ТФ
        'tfp': '/pipe-type-tfp-drawing.png' // Чертеж типа ТФП
      };
      
      const title = titles[drawingType as keyof typeof titles] || 'Чертеж трубы';
      const image = images[drawingType as keyof typeof images] || '/pipe-type-t-drawing.svg';
      
      setModalContent(`
        <h3 style="margin-top: 0; color: #1e40af; margin-bottom: 20px; font-size: 18px; text-align: center;">${title}</h3>
        <div style="text-align: center;">
          <img 
            src="${image}" 
            alt="${title}" 
            style="max-width: ${isZoomed ? '200%' : '100%'}; height: auto; display: block; margin: 0 auto; cursor: pointer; transition: transform 0.3s ease; transform: scale(${isZoomed ? '1.5' : '1'}); border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" 
            onclick="window.toggleImageZoom()"
          />
          <p style="margin-top: 15px; font-size: 14px; color: #666; text-align: center;">Нажмите на изображение для ${isZoomed ? 'уменьшения' : 'увеличения'}</p>
        </div>
      `);
    }
  }, [isOpen, drawingType, isZoomed]);

  // Функция для переключения масштаба изображения
  const toggleImageZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // Добавляем функцию в window при монтировании компонента
  useEffect(() => {
    (window as any).toggleImageZoom = toggleImageZoom;
    
    return () => {
      delete (window as any).toggleImageZoom;
    };
  }, [isZoomed]);

  if (!isOpen) return null;

  console.log('DrawingModal rendering with:', { isOpen, drawingType, modalContent });

  return (
    <div 
      className="drawing-modal" 
      onClick={onClose} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(0,0,0,0.5)', 
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      <div 
        className="drawing-modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ 
          position: 'relative', 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '12px', 
          width: '100%', 
          maxWidth: '900px',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        {/* Кнопка закрытия */}
        <span 
          className="drawing-modal-close" 
          onClick={onClose} 
          style={{ 
            position: 'absolute', 
            top: '10px', 
            right: '15px', 
            fontSize: '24px', 
            cursor: 'pointer',
            zIndex: 1001,
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.1)',
            color: '#666',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.2)';
            e.currentTarget.style.color = '#333';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)';
            e.currentTarget.style.color = '#666';
          }}
        >
          &times;
        </span>

        {/* Кнопки навигации */}
        {onNavigateToDrawing && (
          <>
            <button
              onClick={navigateToPrevDrawing}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                border: 'none',
                borderRadius: '50%',
                backgroundColor: 'rgba(37, 99, 235, 0.8)',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                zIndex: 1001
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 1)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.8)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
              title="Предыдущий чертеж (←)"
            >
              ‹
            </button>
            
            <button
              onClick={navigateToNextDrawing}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                border: 'none',
                borderRadius: '50%',
                backgroundColor: 'rgba(37, 99, 235, 0.8)',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                zIndex: 1001
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 1)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.8)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
              title="Следующий чертеж (→)"
            >
              ›
            </button>
          </>
        )}

        {/* Подсказка по управлению */}
        {onNavigateToDrawing && (
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '12px',
            color: '#666',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '4px 8px',
            borderRadius: '4px',
            zIndex: 1001
          }}>
            Используйте стрелки ← → для навигации между чертежами
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: modalContent }} />
      </div>
    </div>
  );
}

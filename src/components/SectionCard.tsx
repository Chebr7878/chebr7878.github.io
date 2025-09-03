import { Card, CardContent } from "@/components/ui/card";
import { useMarkHighlight } from "@/hooks/use-mark-highlight";
import PipeTypeButtons from "./PipeTypeButtons";
import AnchorSheetImages from "./AnchorSheetImages";
import { useEffect } from "react";

export default function SectionCard({
  id,
  number,
  title,
  content,
  onOpenDrawing,
  onOpenCentrifugationImage,
  onOpenVibropressingImage,
  onOpenRadialPressingImage,
}: {
  id: string;
  number: number;
  title: string;
  content: string;
  onOpenDrawing?: (drawingType: string) => void;
  onOpenCentrifugationImage?: (imageType: string) => void;
  onOpenVibropressingImage?: (imageType: string) => void;
  onOpenRadialPressingImage?: (imageType: string) => void;
}) {
  const containerRef = useMarkHighlight();

  useEffect(() => {
    console.log('SectionCard: useEffect triggered for id:', id);
    console.log('SectionCard: onOpenCentrifugationImage:', !!onOpenCentrifugationImage);
    console.log('SectionCard: onOpenVibropressingImage:', !!onOpenVibropressingImage);
    console.log('SectionCard: onOpenRadialPressingImage:', !!onOpenRadialPressingImage);
    
    // Функция для вставки кнопок
    const injectButtons = () => {
      // Вставляем кнопки центрифугирования в placeholder
      if (id === 'tehnologiya-izgotovleniya' && onOpenCentrifugationImage) {
        console.log('SectionCard: Attempting to inject centrifugation buttons');
        const placeholder = document.getElementById('centrifugation-buttons-placeholder');
        if (placeholder) {
          console.log('SectionCard: Found centrifugation placeholder, injecting buttons');
          // Создаем контейнер для кнопок
          const buttonsContainer = document.createElement('div');
          console.log('SectionCard: Created buttonsContainer for centrifugation');
          buttonsContainer.className = 'centrifugation-buttons-container';
          
          // Создаем кнопки
          const centrifugationImages = [
            { type: 'centrifuge-1', name: 'Центрифуга 1' },
            { type: 'centrifuge-2', name: 'Центрифуга 2' },
            { type: 'centrifuge-3', name: 'Центрифуга 3' },
          ];

          const buttonsHTML = `
            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 class="text-md font-semibold mb-3 text-center text-gray-800">
                Изображения центрифугирования
              </h4>
              <div class="flex justify-center items-center gap-3">
                ${centrifugationImages.map((image) => `
                  <button
                    onclick="window.openCentrifugationImage && window.openCentrifugationImage('${image.type}')"
                    class="px-3 py-2 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-md"
                    style="min-width: 100px;"
                  >
                    ${image.name}
                  </button>
                `).join('')}
              </div>
            </div>
          `;
          
          buttonsContainer.innerHTML = buttonsHTML;
          placeholder.replaceWith(buttonsContainer);
        }
      }

      // Вставляем кнопки вибропрессования в placeholder
      if (id === 'tehnologiya-izgotovleniya' && onOpenVibropressingImage) {
        console.log('SectionCard: Attempting to inject vibropressing buttons');
        const placeholder = document.getElementById('vibropressing-buttons-placeholder');
        if (placeholder) {
          console.log('SectionCard: Found vibropressing placeholder, injecting buttons');
          // Создаем контейнер для кнопок
          const buttonsContainer = document.createElement('div');
          buttonsContainer.className = 'vibropressing-buttons-container';
          
          // Создаем кнопки
          const vibropressingImages = [
            { type: 'vibropress-1', name: 'Вибропресс 1' },
            { type: 'vibropress-2', name: 'Вибропресс 2' },
            { type: 'vibropress-3', name: 'Вибропресс 3' },
          ];

          const buttonsHTML = `
            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 class="text-md font-semibold mb-3 text-center text-gray-800">
                Изображения вибропрессования
              </h4>
              <div class="flex justify-center items-center gap-3">
                ${vibropressingImages.map((image) => `
                  <button
                    onclick="window.openVibropressingImage && window.openVibropressingImage('${image.type}')"
                    class="px-3 py-2 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-md"
                    style="min-width: 100px;"
                  >
                    ${image.name}
                  </button>
                `).join('')}
              </div>
            </div>
          `;
          
          buttonsContainer.innerHTML = buttonsHTML;
          placeholder.replaceWith(buttonsContainer);
        }
      }

      // Вставляем кнопки радиального прессования в placeholder
      if (id === 'tehnologiya-izgotovleniya' && onOpenRadialPressingImage) {
        console.log('SectionCard: Attempting to inject radial pressing buttons');
        const placeholder = document.getElementById('radialpressing-buttons-placeholder');
        if (placeholder) {
          console.log('SectionCard: Found radial pressing placeholder, injecting buttons');
          // Создаем контейнер для кнопок
          const buttonsContainer = document.createElement('div');
          buttonsContainer.className = 'radialpressing-buttons-container';
          
          // Создаем кнопки
          const radialPressingImages = [
            { type: 'radialpress-1', name: 'Радиальное прессование 1' },
            { type: 'radialpress-2', name: 'Радиальное прессование 2' },
            { type: 'radialpress-3', name: 'Радиальное прессование 3' },
          ];

          const buttonsHTML = `
            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 class="text-md font-semibold mb-3 text-center text-gray-800">
                Изображения радиального прессования
              </h4>
              <div class="flex justify-center items-center gap-3">
                ${radialPressingImages.map((image) => `
                  <button
                    onclick="window.openRadialPressingImage && window.openRadialPressingImage('${image.type}')"
                    class="px-3 py-2 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-md"
                    style="min-width: 100px;"
                  >
                    ${image.name}
                  </button>
                `).join('')}
              </div>
            </div>
          `;
          
          buttonsContainer.innerHTML = buttonsHTML;
          placeholder.replaceWith(buttonsContainer);
        }
      }
    };
    
    // Вызываем функцию вставки кнопок
    injectButtons();
    
    // Создаем MutationObserver для отслеживания изменений в DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          // Проверяем, появились ли плейсхолдеры
          const centrifugationPlaceholder = document.getElementById('centrifugation-buttons-placeholder');
          const vibropressingPlaceholder = document.getElementById('vibropressing-buttons-placeholder');
          const radialPressingPlaceholder = document.getElementById('radialpressing-buttons-placeholder');
          
          if (centrifugationPlaceholder && !centrifugationPlaceholder.querySelector('.centrifugation-buttons-container')) {
            console.log('SectionCard: Found centrifugation placeholder via observer, injecting buttons');
            injectButtons();
          }
        }
      });
    });
    
    // Начинаем наблюдение за изменениями в DOM
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Функция для переключения уточнения о дорожных трубах
    const toggleRoadClarification = () => {
      const clarification = document.getElementById('road-clarification');
      if (clarification) {
        const isHidden = clarification.style.display === 'none';
        clarification.style.display = isHidden ? 'block' : 'none';
        
        // Добавляем обработчик клика вне области для закрытия
        if (isHidden) {
          setTimeout(() => {
            const handleClickOutside = (event: MouseEvent) => {
              const target = event.target as HTMLElement;
              if (!clarification.contains(target) && !target.closest('#road-clarification-btn')) {
                clarification.style.display = 'none';
                document.removeEventListener('click', handleClickOutside);
              }
            };
            document.addEventListener('click', handleClickOutside);
          }, 100);
        }
      }
    };

    // Функция для переключения всех объяснений
    const toggleExplanation = (id: string) => {
      const explanation = document.getElementById(id);
      if (explanation) {
        const isHidden = explanation.style.display === 'none';
        explanation.style.display = isHidden ? 'block' : 'none';
      }
    };

    // Добавляем функции в глобальную область видимости
    (window as any).toggleRoadClarification = toggleRoadClarification;
    (window as any).openCentrifugationImage = (imageType: string) => {
      console.log('Global: openCentrifugationImage called with:', imageType);
      onOpenCentrifugationImage?.(imageType);
    };
    (window as any).openVibropressingImage = (imageType: string) => {
      console.log('Global: openVibropressingImage called with:', imageType);
      onOpenVibropressingImage?.(imageType);
    };
    (window as any).openRadialPressingImage = (imageType: string) => {
      console.log('Global: openRadialPressingImage called with:', imageType);
      onOpenRadialPressingImage?.(imageType);
    };
    
    // Функция для скачивания ГОСТ 6482-2011
    (window as any).downloadGOST = () => {
      const filename = 'ГОСТ 6482-2011 Трубы железобетонные безнапорные  .pdf';
      const url = `/${filename}`;
      console.log('Скачиваю ГОСТ:', url);
      
      // Создаем ссылку для скачивания
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.target = '_blank';
      
      // Добавляем ссылку в DOM, кликаем по ней и удаляем
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    
    // Функция для открытия статьи о выборе материала труб
    (window as any).openPipeMaterialArticle = () => {
      const filename = 'Статья о выборе материала труб Шепелевич Н.И. .pdf';
      const url = `/${filename}`;
      console.log('Открываю статью о выборе материала труб:', url);
      window.open(url, '_blank');
    };
    
    // Функция для открытия материалов для проектирования
    (window as any).openDesignMaterials = () => {
      const filename = 'МАТЕРИАЛЫ для проектирования ГОСТ 6482-2011 .pdf';
      const url = `/${filename}`;
      console.log('Открываю материалы для проектирования:', url);
      window.open(url, '_blank');
    };
    
    (window as any).toggleExplanation = () => toggleExplanation('simple-explanation');
    (window as any).toggleClassificationExplanation = () => toggleExplanation('classification-explanation');
    (window as any).toggleStrengthExplanation = () => toggleExplanation('strength-explanation');
    (window as any).toggleDimensionsExplanation = () => toggleExplanation('dimensions-explanation');
    (window as any).toggleMarkingExplanation = () => toggleExplanation('marking-explanation');
    (window as any).toggleTechnologyExplanation = () => toggleExplanation('technology-explanation');
    (window as any).toggleProductionTechnologies = () => toggleExplanation('production-technologies');
    (window as any).toggleConditionsExplanation = () => toggleExplanation('conditions-explanation');
    (window as any).toggleMaterialsExplanation = () => toggleExplanation('materials-explanation');
    (window as any).toggleJointExplanation = () => toggleExplanation('joint-explanation');
    (window as any).toggleAggressiveExplanation = () => toggleExplanation('aggressive-explanation');
    (window as any).toggleQualityExplanation = () => toggleExplanation('quality-explanation');
    (window as any).toggleAcceptanceExplanation = () => toggleExplanation('acceptance-explanation');
    (window as any).toggleTestingExplanation = () => toggleExplanation('testing-explanation');
    (window as any).toggleTransportExplanation = () => toggleExplanation('transport-explanation');
    (window as any).togglePurchaseExplanation = () => toggleExplanation('purchase-explanation');
    (window as any).toggleReferencesExplanation = () => toggleExplanation('references-explanation');
    (window as any).toggleSafetyExplanation = () => toggleExplanation('safety-explanation');
    (window as any).toggleSealSizes = () => toggleExplanation('seal-sizes');

    // Очистка при размонтировании
    return () => {
      observer.disconnect();
      delete (window as any).toggleRoadClarification;
      delete (window as any).openCentrifugationImage;
      delete (window as any).openVibropressingImage;
      delete (window as any).openRadialPressingImage;
      delete (window as any).downloadGOST;
      delete (window as any).openPipeMaterialArticle;
      delete (window as any).openDesignMaterials;
      delete (window as any).toggleExplanation;
      delete (window as any).toggleClassificationExplanation;
      delete (window as any).toggleStrengthExplanation;
      delete (window as any).toggleDimensionsExplanation;
      delete (window as any).toggleMarkingExplanation;
      delete (window as any).toggleTechnologyExplanation;
      delete (window as any).toggleProductionTechnologies;
      delete (window as any).toggleConditionsExplanation;
      delete (window as any).toggleMaterialsExplanation;
      delete (window as any).toggleJointExplanation;
      delete (window as any).toggleAggressiveExplanation;
      delete (window as any).toggleQualityExplanation;
      delete (window as any).toggleAcceptanceExplanation;
      delete (window as any).toggleTestingExplanation;
      delete (window as any).toggleTransportExplanation;
      delete (window as any).togglePurchaseExplanation;
      delete (window as any).toggleReferencesExplanation;
      delete (window as any).toggleSafetyExplanation;
      delete (window as any).toggleSealSizes;
    };
  }, []);

  return (
    <article id={id} className="scroll-mt-20 sm:scroll-mt-24" aria-labelledby={`${id}-title`}>
      <Card className="border bg-card content-card">
        <CardContent className="p-4 sm:p-5 lg:p-6">
          <header>
            <h2 id={`${id}-title`} className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight mb-3 sm:mb-4 heading-primary">
              {title}
            </h2>
          </header>
          <div 
            ref={containerRef}
            className="text-xs sm:text-sm lg:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          
          {/* Рендерим кнопки типов труб только для раздела "Классификация" */}
          {id === 'klassifikaciya' && onOpenDrawing && (
            <PipeTypeButtons onOpenDrawing={onOpenDrawing} />
          )}
          
          {/* Рендерим фотографии анкерных листов для раздела "Агрессивные среды и внутренние покрытия" */}
          {id === 'agressivnye-sredy' && (
            <AnchorSheetImages />
          )}
        </CardContent>
      </Card>
    </article>
  );
}

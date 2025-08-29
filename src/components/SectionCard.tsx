import { Card, CardContent } from "@/components/ui/card";
import { useMarkHighlight } from "@/hooks/use-mark-highlight";
import PipeTypeButtons from "./PipeTypeButtons";
import { useEffect } from "react";

export default function SectionCard({
  id,
  number,
  title,
  content,
  onOpenDrawing,
}: {
  id: string;
  number: number;
  title: string;
  content: string;
  onOpenDrawing?: (drawingType: string) => void;
}) {
  const containerRef = useMarkHighlight();

  useEffect(() => {
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
    (window as any).toggleExplanation = () => toggleExplanation('simple-explanation');
    (window as any).toggleClassificationExplanation = () => toggleExplanation('classification-explanation');
    (window as any).toggleStrengthExplanation = () => toggleExplanation('strength-explanation');
    (window as any).toggleDimensionsExplanation = () => toggleExplanation('dimensions-explanation');
    (window as any).toggleMarkingExplanation = () => toggleExplanation('marking-explanation');
    (window as any).toggleTechnologyExplanation = () => toggleExplanation('technology-explanation');
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
      delete (window as any).toggleRoadClarification;
      delete (window as any).toggleExplanation;
      delete (window as any).toggleClassificationExplanation;
      delete (window as any).toggleStrengthExplanation;
      delete (window as any).toggleDimensionsExplanation;
      delete (window as any).toggleMarkingExplanation;
      delete (window as any).toggleTechnologyExplanation;
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
    <article id={id} className="scroll-mt-24" aria-labelledby={`${id}-title`}>
      <Card className="border bg-card content-card">
        <CardContent className="p-5 sm:p-6">
          <header>
            <h2 id={`${id}-title`} className="text-xl sm:text-2xl font-semibold tracking-tight mb-4 heading-primary">
              {title}
            </h2>
          </header>
          <div 
            ref={containerRef}
            className="text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          
          {/* Рендерим кнопки типов труб только для раздела "Классификация" */}
          {id === 'klassifikaciya' && onOpenDrawing && (
            <PipeTypeButtons onOpenDrawing={onOpenDrawing} />
          )}
        </CardContent>
      </Card>
    </article>
  );
}

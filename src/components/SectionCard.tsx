import { Card, CardContent } from "@/components/ui/card";
import { useMarkHighlight } from "@/hooks/use-mark-highlight";
import PipeTypeButtons from "./PipeTypeButtons";

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

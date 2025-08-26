import { Card, CardContent } from "@/components/ui/card";
import { useMarkHighlight } from "@/hooks/use-mark-highlight";

export default function SectionCard({
  id,
  number,
  title,
  content,
}: {
  id: string;
  number: number;
  title: string;
  content: string;
}) {
  const containerRef = useMarkHighlight();

  return (
    <article id={id} className="scroll-mt-24" aria-labelledby={`${id}-title`}>
      <Card className="border bg-card">
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
        </CardContent>
      </Card>
    </article>
  );
}

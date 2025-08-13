import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function SectionCard({
  id,
  number,
  title,
  summary,
  content,
}: {
  id: string;
  number: number;
  title: string;
  summary: string;
  content: string;
}) {
  return (
    <article id={id} className="scroll-mt-24" aria-labelledby={`${id}-title`}>
      <Card className="border bg-card">
        <CardContent className="p-5 sm:p-6">
          <header>
            <h2 id={`${id}-title`} className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">
              {number}. {title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-2">{summary}</p>
          </header>
          <Accordion type="single" collapsible>
            <AccordionItem value="more">
              <AccordionTrigger className="text-sm sm:text-base">Подробнее</AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base leading-relaxed">
                {content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </article>
  );
}

import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <article id={id} className="scroll-mt-24" aria-labelledby={`${id}-title`}>
      <Card className="border bg-card">
        <CardContent className="p-5 sm:p-6">
          <header>
            <h2 id={`${id}-title`} className="text-xl sm:text-2xl font-semibold tracking-tight mb-4">
              {title}
            </h2>
          </header>
          <div 
            className="text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </CardContent>
      </Card>
    </article>
  );
}

import Header from "@/components/Header";
import SectionCard from "@/components/SectionCard";
import sections from "@/data/sections";

const Index = () => {
  const onNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ГОСТ 6482-2011 — Трубы железобетонные безнапорные",
    description:
      "Обзор 18 разделов стандарта ГОСТ 6482-2011: классификация, размеры, испытания, транспортирование и др.",
    hasPart: sections.map((s) => ({
      "@type": "Article",
      headline: `${s.number}. ${s.title}`,
      url: `#${s.id}`,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={onNavigate} />
      <main className="pt-16 pb-10">
        <section className="mx-auto max-w-6xl px-3 sm:px-4">
          <div className="py-6 sm:py-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-2">
              ГОСТ 6482-2011 — Трубы железобетонные безнапорные
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-3xl">
              Чистый и лёгкий обзор стандарта с 18 разделами: от классификации и размеров до испытаний, транспортирования
              и требований безопасности. Переходите к интересующему разделу через меню или поиск.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {sections.map((s) => (
              <SectionCard key={s.id} {...s} />
            ))}
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
};

export default Index;

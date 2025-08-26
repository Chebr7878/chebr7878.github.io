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
      "ГОСТ 6482-2011: полная информация о железобетонных трубах - виды, размеры, маркировка, изготовление, испытания, транспортировка. Производители и где купить трубы железобетонные.",
    hasPart: sections.map((s) => ({
      "@type": "Article",
      headline: s.title,
      url: `#${s.id}`,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={onNavigate} />
      <main className="pt-16 pb-10">
        <section className="mx-auto max-w-6xl px-3 sm:px-4">
          <div className="py-6 sm:py-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-2 heading-primary">
              ГОСТ 6482-2011 — Трубы железобетонные безнапорные
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Этот сайт посвящён ГОСТ 6482-2011 и содержит всю основную информацию о железобетонных трубах: их виды, назначение, размеры, маркировку, правила изготовления, испытаний, транспортировки и хранения. Здесь вы также найдёте сведения о производителях и о том, где можно купить трубы железобетонные. Для удобства представлен простой обзор стандарта с 18 разделами — от классификации и размеров до испытаний, транспортировки и требований безопасности. Используйте меню или поиск, чтобы быстро перейти к нужному разделу.
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

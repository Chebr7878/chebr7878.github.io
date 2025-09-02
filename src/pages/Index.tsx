import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionCard from "@/components/SectionCard";
import DrawingModal from "@/components/DrawingModal";
import CentrifugationModal from "@/components/CentrifugationModal";
import VibropressingModal from "@/components/VibropressingModal";
import RadialPressingModal from "@/components/RadialPressingModal";
import CloudBackground from "@/components/CloudBackground";
import sections from "@/data/sections";
import { useState } from "react";

const Index = () => {
  const [isDrawingModalOpen, setIsDrawingModalOpen] = useState(false);
  const [currentDrawingType, setCurrentDrawingType] = useState<string | null>(null);
  const [isCentrifugationModalOpen, setIsCentrifugationModalOpen] = useState(false);
  const [currentCentrifugationImageType, setCurrentCentrifugationImageType] = useState<string | null>(null);
  const [isVibropressingModalOpen, setIsVibropressingModalOpen] = useState(false);
  const [currentVibropressingImageType, setCurrentVibropressingImageType] = useState<string | null>(null);
  const [isRadialPressingModalOpen, setIsRadialPressingModalOpen] = useState(false);
  const [currentRadialPressingImageType, setCurrentRadialPressingImageType] = useState<string | null>(null);
  const onNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openDrawingModal = (drawingType: string) => {
    console.log('Index: openDrawingModal called with:', drawingType);
    console.log('Index: Current state before update:', { isDrawingModalOpen, currentDrawingType });
    
    setCurrentDrawingType(drawingType);
    setIsDrawingModalOpen(true);
    
    console.log('Index: Modal state should be open now');
    console.log('Index: New state will be:', { isDrawingModalOpen: true, currentDrawingType: drawingType });
  };

  const closeDrawingModal = () => {
    setIsDrawingModalOpen(false);
    setCurrentDrawingType(null);
  };

  const openCentrifugationModal = (imageType: string) => {
    console.log('Index: openCentrifugationModal called with:', imageType);
    setCurrentCentrifugationImageType(imageType);
    setIsCentrifugationModalOpen(true);
  };

  const closeCentrifugationModal = () => {
    setIsCentrifugationModalOpen(false);
    setCurrentCentrifugationImageType(null);
  };

  const openVibropressingModal = (imageType: string) => {
    console.log('Index: openVibropressingModal called with:', imageType);
    setCurrentVibropressingImageType(imageType);
    setIsVibropressingModalOpen(true);
  };

  const closeVibropressingModal = () => {
    setIsVibropressingModalOpen(false);
    setCurrentVibropressingImageType(null);
  };

  const openRadialPressingModal = (imageType: string) => {
    console.log('Index: openRadialPressingModal called with:', imageType);
    setCurrentRadialPressingImageType(imageType);
    setIsRadialPressingModalOpen(true);
  };

  const closeRadialPressingModal = () => {
    setIsRadialPressingModalOpen(false);
    setCurrentRadialPressingImageType(null);
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
    <div className="min-h-screen bg-background relative">
      <CloudBackground />
      <Header onNavigate={onNavigate} />
      <main className="pt-16 pb-10 relative z-10">
        <section className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
          <div className="py-4 sm:py-6 lg:py-8">
            <div className="p-4 sm:p-5 lg:p-6 content-card">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3 sm:mb-4 heading-primary">
                ГОСТ 6482-2011 — Трубы железобетонные безнапорные
              </h1>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed">
                Этот сайт посвящён ГОСТ 6482-2011 и содержит всю основную информацию о железобетонных трубах: их виды, назначение, размеры, маркировку, правила изготовления, испытаний, транспортировки и хранения. Здесь вы также найдёте{' '}
                <span 
                  className="producer-link"
                  onClick={() => onNavigate('gde-priobresti')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onNavigate('gde-priobresti');
                    }
                  }}
                >
                  сведения о производителях и о том, где можно купить трубы железобетонные
                </span>
                . Для удобства представлен простой обзор стандарта с 18 разделами — от классификации и размеров до испытаний, транспортировки и требований безопасности. Используйте меню или поиск, чтобы быстро перейти к нужному разделу.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-5">
            {sections.map((s) => (
              <SectionCard 
                key={s.id} 
                {...s} 
                onOpenDrawing={openDrawingModal}
                onOpenCentrifugationImage={openCentrifugationModal}
                onOpenVibropressingImage={openVibropressingModal}
                onOpenRadialPressingImage={openRadialPressingModal}
              />
            ))}
          </div>
        </section>
      </main>

      <DrawingModal 
        isOpen={isDrawingModalOpen}
        drawingType={currentDrawingType}
        onClose={closeDrawingModal}
      />
      <CentrifugationModal 
        isOpen={isCentrifugationModalOpen}
        imageType={currentCentrifugationImageType}
        onClose={closeCentrifugationModal}
      />
      <VibropressingModal 
        isOpen={isVibropressingModalOpen}
        imageType={currentVibropressingImageType}
        onClose={closeVibropressingModal}
      />
      <RadialPressingModal 
        isOpen={isRadialPressingModalOpen}
        imageType={currentRadialPressingImageType}
        onClose={closeRadialPressingModal}
      />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
};

export default Index;

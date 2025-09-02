interface PipeTypeButtonsProps {
  onOpenDrawing: (drawingType: string) => void;
}

export default function PipeTypeButtons({ onOpenDrawing }: PipeTypeButtonsProps) {
  const pipeTypes = [
    { type: 't', name: 'Тип Т' },
    { type: 'ts', name: 'Тип ТС' },
    { type: 'tb', name: 'Тип ТБ' },
    { type: 'tbp-tsp', name: 'Тип ТСП и ТБП' },
    { type: 'tf', name: 'Тип ТФ' },
    { type: 'tfp', name: 'Тип ТФП' },
  ];

  const openPDF = (filename: string) => {
    const url = `/${filename}`;
    window.open(url, '_blank');
  };

  return (
    <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center text-gray-800">
        Чертежи типов труб
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
        {pipeTypes.map((pipeType) => (
          <button
            key={pipeType.type}
            onClick={() => {
              console.log('Button clicked:', pipeType.type);
              onOpenDrawing(pipeType.type);
            }}
            className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-md text-xs sm:text-sm"
            style={{ minWidth: '80px' }}
          >
            {pipeType.name}
          </button>
        ))}
      </div>
      
      {/* Новые кнопки для PDF файлов */}
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
        <h4 className="text-sm sm:text-md font-semibold mb-3 text-center text-gray-700">
          Дополнительные материалы
        </h4>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <button
            onClick={() => openPDF('Трубы железобетонные Т ТБ ТС - отличия - взаимозаменяемость .pdf')}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg border-2 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:border-blue-400 transition-all duration-200 font-medium text-blue-700 hover:text-blue-900 shadow-sm hover:shadow-md text-sm"
            style={{ minWidth: '200px' }}
          >
            Трубы Т, ТС, ТБ взаимозаменяемость
          </button>
          <button
            onClick={() => openPDF('Письмо трубы Т ТБ ТС взаимозаменяемые Институт БелНИИС .pdf')}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg border-2 border-green-300 bg-green-50 hover:bg-green-100 hover:border-green-400 transition-all duration-200 font-medium text-green-700 hover:text-green-900 shadow-sm hover:shadow-md text-sm"
            style={{ minWidth: '200px' }}
          >
            Трубы Т, ТС, ТБ письмо БЕЛНИИС
          </button>
        </div>
      </div>
    </div>
  );
}

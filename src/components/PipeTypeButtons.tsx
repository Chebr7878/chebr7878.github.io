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

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">
        Чертежи типов труб
      </h3>
      <div className="flex justify-between items-center gap-4">
        {pipeTypes.map((pipeType) => (
          <button
            key={pipeType.type}
            onClick={() => {
              console.log('Button clicked:', pipeType.type);
              onOpenDrawing(pipeType.type);
            }}
            className="px-4 py-3 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-md"
            style={{ minWidth: '120px' }}
          >
            {pipeType.name}
          </button>
        ))}
      </div>
    </div>
  );
}

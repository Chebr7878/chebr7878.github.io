interface CentrifugationButtonsProps {
  onOpenImage: (imageType: string) => void;
}

export default function CentrifugationButtons({ onOpenImage }: CentrifugationButtonsProps) {
  const centrifugationImages = [
    { type: 'centrifuge-1', name: 'Центрифуга 1' },
    { type: 'centrifuge-2', name: 'Центрифуга 2' },
    { type: 'centrifuge-3', name: 'Центрифуга 3' },
  ];

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h4 className="text-md font-semibold mb-3 text-center text-gray-800">
        Изображения центрифугирования
      </h4>
      <div className="flex justify-center items-center gap-3">
        {centrifugationImages.map((image) => (
          <button
            key={image.type}
            onClick={() => {
              console.log('Centrifugation button clicked:', image.type);
              onOpenImage(image.type);
            }}
            className="px-3 py-2 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-md"
            style={{ minWidth: '100px' }}
          >
            {image.name}
          </button>
        ))}
      </div>
    </div>
  );
}

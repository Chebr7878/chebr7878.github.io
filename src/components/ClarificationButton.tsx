import { useState } from 'react';

interface ClarificationButtonProps {
  text: string;
  clarificationContent: string;
  imageSrc: string;
  imageAlt: string;
}

const ClarificationButton = ({ text, clarificationContent, imageSrc, imageAlt }: ClarificationButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClarification = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="inline-block">
      <span>{text}</span>
      <button
        onClick={toggleClarification}
        className="inline-flex items-center justify-center w-6 h-6 ml-1 text-xs font-medium text-white bg-gray-500 rounded-full hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
        title="Уточнение"
        aria-label="Показать уточнение"
      >
        ?
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="relative max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Уточнение</h3>
                <button
                  onClick={toggleClarification}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  aria-label="Закрыть"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="prose prose-sm max-w-none">
                <div dangerouslySetInnerHTML={{ __html: clarificationContent }} />
                
                <div className="mt-6 text-center">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="max-w-full h-auto rounded-lg shadow-md mx-auto"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClarificationButton;

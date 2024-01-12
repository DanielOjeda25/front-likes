import { useSelector } from 'react-redux';
import faqTranslations from './faqdata'
const FAQItem = () => {
  const language = useSelector((state) => state.language);
  const isSpanish = language === 'es';


  const currentTranslations = faqTranslations[isSpanish ? 'es' : 'en'] || [];
  return (
    <div>
      {currentTranslations.map((item, index) => (
        <details key={index} className="mb-4 bg-white rounded-lg p-4">
          <summary className="text-lg font-normal cursor-pointer border-b-2 border-gray-300 pb-2">
            {item.pregunta}
          </summary>
          <p className="ml-4 text-gray-700 mt-2">{item.respuesta}</p>
        </details>
      ))}
    </div>
  );
}

export default FAQItem;

import React from 'react';

const FAQItem = ({ pregunta, respuesta }) => {
  return (
    <details className="mb-4 bg-white rounded-lg  p-4">
      <summary className="text-lg font-normal cursor-pointer border-b-2 border-gray-300 pb-2">
        {pregunta}
      </summary>
      <p className="ml-4 text-gray-700 mt-2">{respuesta}</p>
    </details>
  );
}

export default FAQItem;

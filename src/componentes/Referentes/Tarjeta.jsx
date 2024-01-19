import React from 'react';

const Tarjeta = ({ nombre, texto }) => {
  return (
    <div className="mt-8 max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-indigo-600 text-center">Testimonio Reciente</div>
        <p className="text-gray-800 text-base">
          <span className="font-semibold text-lg">{nombre}</span>
          <br />
          {texto}
        </p>
      </div>
    </div>
  );
};

export default Tarjeta;

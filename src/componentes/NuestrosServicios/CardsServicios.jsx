/* eslint-disable react/prop-types */
import React from 'react';

const CardsServicios = ({ title, texto, svg }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col transition-transform transform hover:scale-105">
      <a href="#" />
      <div className="relative">
        <a href="#">
          {/* Cambiado de imagen a prop SVG */}
          {svg && (
            <div className="w-full">
              {svg}
            </div>
          )}
        </a>
      </div>
      <div className="px-6 py-4 mb-auto text-center">
        <p
          className="font-medium text-lg text-center hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
        >
          {title}
        </p>
        <p className="text-gray-500 text-sm">
          {texto}
        </p>
      </div>
    </div>
  );
};

export default CardsServicios;

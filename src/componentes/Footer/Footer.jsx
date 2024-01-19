import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const language = useSelector((state) => state.language);

  const translations = {
    es: {
      home: 'Inicio',
      faq: 'Preguntas frecuentes',
      contact: 'Contacto',
      rightsReserved: '© 2024 SMM Matrix. Todos los derechos reservados.',
    },
    en: {
      home: 'Home',
      faq: 'FAQ',
      contact: 'Contact',
      rightsReserved: '© 2024 SMM Matrix. All Rights Reserved.',
    },
    // Agrega más idiomas según sea necesario
  };

  const translation = translations[language]

  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/smm.ico"
              className="h-8"
              alt="logo"
            />
            <span className="self-center text-2xl font-normal italic whitespace-nowrap dark:text-white">
              SMM Matrix
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#home" className="hover:underline me-4 md:me-6">
                {translation.home}
              </a>
            </li>
            <li>
              <a href="/preguntas" className="hover:underline me-4 md:me-6">
                {translation.faq}
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                {translation.contact}
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {translation.rightsReserved}
        </span>
      </div>
    </footer>
  );
};

export default Footer;

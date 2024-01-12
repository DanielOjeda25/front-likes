import React from 'react';
import { useSelector } from 'react-redux';

const HeaderFAQ = () => {
  const language = useSelector((state) => state.language);

  const translations = {
    es: {
      title: 'Preguntas frecuentes (FAQ)',
    },
    en: {
      title: 'Frequently Asked Questions (FAQ)',
    },
    // Agrega más idiomas según sea necesario
  };

  const translation = translations[language] || translations.en;

  return (
    <header className='bg-gradient-to-r w-full justify-center items-center flex flex-col h-3/4 py-10 '>
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        {translation.title}
      </h1>
    </header>
  );
}

export default HeaderFAQ;

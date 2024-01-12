import React from 'react';
import { useSelector } from 'react-redux';

const HeaderYouTube = () => {
  const language = useSelector((state) => state.language);

  const headerTexts = {
    es: {
      title: 'Potencia tu canal de YouTube con SMM Boosters',
      subtitle:
        '¡Impulsa tu presencia en YouTube! SMM Boosters ofrece estrategias para aumentar tus vistas, likes y suscriptores, llevando tu canal a nuevas alturas.',
      buttonText: 'Explora Paquetes de Impulso en YouTube',
    },
    en: {
      title: 'Boost Your YouTube Channel with SMM Boosters',
      subtitle:
        'Supercharge your YouTube presence! SMM Boosters offers strategies to increase your views, likes, and subscribers, propelling your channel to new heights.',
      buttonText: 'Explore YouTube Boosting Packages',
    },
  };

  const { title, subtitle, buttonText } = headerTexts[language];

  return (
    <header className='bg-gradient-to-r from-red-600 to-yellow-500 w-full justify-center items-center flex flex-col h-3/4 py-10 shadow-md'>
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white text-center">
        {title}
      </h1>
      <p className="mb-6 mx-2 text-center text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {subtitle}
      </p>
      <a
        href="#youtube"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-700 hover:bg-red-900 rounded "
      >
        {buttonText}
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </header>
  );
};

export default HeaderYouTube;

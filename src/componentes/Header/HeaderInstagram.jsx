import React from 'react';
import { useSelector } from 'react-redux';

const HeaderInstagram = () => {
  const language = useSelector((state) => state.language);

  const headerTexts = {
    es: {
      title: 'Potencia tu presencia en Instagram con SMM Boosters',
      subtitle:
        '¡Eleva tu juego en Instagram! SMM Boosters se especializa en estrategias que hacen despegar tus seguidores y me gusta, brindándote el impulso en las redes sociales que necesitas.',
      buttonText: 'Descubre Nuestros Paquetes de Impulso',
    },
    en: {
      title: 'Supercharge Your Instagram Presence with SMM Boosters',
      subtitle:
        'Elevate your Instagram game! SMM Boosters specializes in strategies that skyrocket your followers and likes, giving you the social media boost you need.',
      buttonText: 'Discover Our Boosting Packages',
    },
  };

  const { title, subtitle, buttonText } = headerTexts[language];

  return (
    <header className='bg-gradient-to-r from-pink-500 to-red-500 w-full justify-center items-center flex flex-col h-3/4 py-10 shadow-md'>
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white text-center">
        {title}
      </h1>
      <p className="mb-6 mx-2 text-center text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {subtitle}
      </p>
      <a
        href="#tabla"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-pink-600 hover:bg-pink-900 rounded "
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

export default HeaderInstagram;

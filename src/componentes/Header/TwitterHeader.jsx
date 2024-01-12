import React from 'react';
import { useSelector } from 'react-redux';

const HeaderTwitter = () => {
  const language = useSelector((state) => state.language);

  const headerTexts = {
    es: {
      title: 'Eleva tu presencia en Twitter con SMM Boosters',
      subtitle:
        '¡Impulsa tu participación en Twitter! SMM Boosters ofrece estrategias efectivas para obtener más likes, retweets y seguidores, llevando tu juego en Twitter al siguiente nivel.',
      buttonText: 'Explora Paquetes de Impulso en Twitter',
    },
    en: {
      title: 'Elevate Your Twitter Presence with SMM Boosters',
      subtitle:
        'Boost your Twitter engagement! SMM Boosters provides effective strategies to get more likes, retweets, and followers, taking your Twitter game to the next level.',
      buttonText: 'Explore Twitter Boosting Packages',
    },
  };

  const { title, subtitle, buttonText } = headerTexts[language];

  return (
    <header className='bg-gradient-to-r from-blue-500 to-cyan-400 w-full justify-center items-center flex flex-col h-3/4 py-10 shadow-md'>
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white text-center">
        {title}
      </h1>
      <p className="mb-6 mx-2 text-center text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {subtitle}
      </p>
      <a
        href="#twitter"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 hover:bg-blue-900 rounded "
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

export default HeaderTwitter;

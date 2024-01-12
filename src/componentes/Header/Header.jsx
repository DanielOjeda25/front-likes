import { useSelector } from 'react-redux';

const Header = () => {
  const language = useSelector((state) => state.language);
  const isSpanish = language === 'es';

  return (
    <header className='bg-gradient-to-r from-pink-500 to-red-500 w-full justify-center items-center flex flex-col h-3/4 py-5'>
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white text-center">
        {isSpanish
          ? 'Potencia tu presencia en redes sociales con SMM Matrix'
          : 'Boost Your Social Presence with SMM Matrix'}
      </h1>
      <p className="mb-6 mx-2 text-center text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {isSpanish
          ? '¡Desbloquea el poder de las redes sociales! En SMM Matrix, nos especializamos en estrategias que elevan tu presencia en línea, impulsan la participación y te ayudan a alcanzar nuevas alturas en el panorama digital.'
          : 'Unlock the power of social media! At SMM Matrix, we specialize in strategies that elevate your online presence, drive engagement, and help you reach new heights in the digital landscape.'}
      </p>
      <a
        href="#services"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-500 hover:bg-red-900 rounded "
      >
        {isSpanish ? 'Explora Nuestros Servicios' : 'Explore Our Services'}
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

export default Header;

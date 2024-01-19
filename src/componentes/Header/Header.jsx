import { useSelector } from 'react-redux';
import video from '../../assets/connection_-_113385 (1080p).mp4'
const Header = () => {
  const language = useSelector((state) => state.language);
  const isSpanish = language === 'es';

  const titleText = isSpanish
    ? 'Potencia tu presencia en redes sociales con SMM Matrix'
    : 'Boost Your Social Presence with SMM Matrix';

  const descriptionText = isSpanish
    ? '¡Desbloquea el poder de las redes sociales! En SMM Matrix, nos especializamos en estrategias que elevan tu presencia en línea, impulsan la participación y te ayudan a alcanzar nuevas alturas en el panorama digital.🚀'
    : 'Unlock the power of social media! At SMM Matrix, we specialize in strategies that elevate your online presence, drive engagement, and help you reach new heights in the digital landscape.🚀';

  const buttonText = isSpanish ? 'Explora Nuestros Servicios' : 'Explore Our Services';

  return (
    <header className='relative h-screen w-full'>
      <video autoPlay muted loop id="background-video" className='w-full h-full object-cover'>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white text-center">
          {titleText}
        </h1>
        <p className="mb-6 mx-2 text-center text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {descriptionText}
        </p>
        <a
          href="#services"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white hover:bg-red-800 hover:bg-opacity-30 rounded-full transition-all duration-300 ease-in-out border border-white "
        >
          {buttonText}
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180 text-white"
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
      </div>
    </header>
  );
};

export default Header;

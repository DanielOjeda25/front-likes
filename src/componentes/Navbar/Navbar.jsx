import NavLink from './NavLink';
import LanguageSelector from '../Lenguaje/LenguajeSelector';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const language = useSelector((state) => state.language);

  const translations = {
    es: {
      home: 'Inicio',
      services: 'Servicios',
      instagram: 'Instagram',
      twitter: 'Twitter',
      youtube: 'Youtube',
      facebook: 'Facebook',
      faq: 'Preguntas frecuentes',
      contact: 'Contacto',
      ordenes: 'Órdenes de pago'
    },
    en: {
      home: 'Home',
      services: 'Services',
      instagram: 'Instagram',
      twitter: 'Twitter',
      youtube: 'Youtube',
      facebook: 'Facebook',
      faq: 'FAQ',
      contact: 'Contact',
      ordenes: 'Payment orders'
    },
    // Agrega más idiomas según sea necesario
  };
  const translation = translations[language] || translations.en;
  return (
    <nav id='home' className="bg-gray-900 text-white shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/smm.ico"
            className="h-8"
            alt="logo"
          />
          <span className="self-center text-2xl font-semibold italic whitespace-nowrap text-white ">
            SMM Matrix
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg from-pink-500 to-red-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:from-pink-500 md:to-red-500 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li>
              <NavLink to="/">
                {translation.home}
              </NavLink>
            </li>
            <li>
              <button
                id="dropdownNavbara"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-white rounded md:text-white hover:text-white hover:bg-red-500 md:hover:bg-red-500 md:border-0 md:hover:text-white md:p-0 md:w-auto "
              >
                {translation.services}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="/services/instagram"
                      className="block px-4 py-2 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/twitter"
                      className="block px-4 py-2 hover:bg-red-500 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/youtube"
                      className="block px-4 py-2 hover:bg-red-500 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/facebook"
                      className="block px-4 py-2 hover:bg-red-500 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/*  <li>
              <NavLink to="/blog">
                Blog
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/preguntas">
                {translation.faq}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                {translation.contact}
              </NavLink>
            </li>
            <li>
              <NavLink to="/pagos">
                {translation.ordenes}
              </NavLink>
            </li>
            <LanguageSelector />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

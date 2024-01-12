import { useLocation } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const location = useLocation();

  return (
    <a
      href={to}
      className={`block py-2 px-3 text-white hover:text-white hover:bg-red-500 ${location.pathname === to ? 'text-orange-300 border-b-2 border-orange-300' : 'md:hover:bg-red-500 md:hover:text-white '
        } rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent hover:bg-red-300`}
      aria-current={location.pathname === to ? 'page' : undefined}
    >
      {children}
    </a>
  );
};

export default NavLink;

import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../Navbar/Hook/lenguajeSlice';

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
  };

  return (
    <li>
      <label htmlFor="language" className="sr-only">Select Language</label>
      <select
        id="language"
        className="block py-2 px-4 text-gray-900 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent hover:bg-red-300"
        value={language}
        onChange={handleLanguageToggle}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </li>
  );
};

export default LanguageSelector;

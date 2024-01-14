import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCantidad, setCantidad } from './Hooks/InstagramSlice';
import axios from 'axios';
import { API_CALCULAR } from '../../config';

const InstagramComprar = ({ service }) => {
  const cantidad = useSelector(selectCantidad);
  const dispatch = useDispatch();
  const [finalPrice, setFinalPrice] = useState(null);
  const [contactInfo, setContactInfo] = useState({
    email: '',
    socialMedia: '',
    link: '',
  });

  const handleCantidadChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    dispatch(setCantidad(value));
  };

  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCalcularCantidadClick = async () => {
    try {
      const response = await axios.get(
        `${API_CALCULAR}/calculated-price?id-service=${service}&quantity=${cantidad}`
      );

      // Guardar el resultado en el estado
      setFinalPrice(response.data.price);
    } catch (error) {
      console.error('Error al calcular el precio:', error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con la información del formulario, como enviarla a la API
    console.log('Contact Info:', contactInfo);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 md:col-span-1">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mt-5">Quantity:</label>
          <input
            value={cantidad}
            required
            onChange={handleCantidadChange}
            placeholder='calculate the price'
            className="mt-1 p-2 border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-blue-500"
          />
          <div>
            <p className="text-slate-900 font-bold mt-5">Final Price:</p>
            {finalPrice !== null ? (
              <p className="text-slate-900">$ {finalPrice} dollar</p>
            ) : (
              <p className="text-slate-900">Awaiting calculation...</p>
            )}
          </div>
        </div>

        <button
          onClick={handleCalcularCantidadClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          Calculate
        </button>
      </div>
      <div className="col-span-2 md:col-span-1 bg-blue-500 p-4 rounded-md">
        <form onSubmit={handleFormSubmit}>
          <label className="block text-sm font-medium text-white">Contact Information:</label>
          <div className="mb-2">
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleContactInfoChange}
              placeholder="Email"
              className="p-2 border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="socialMedia"
              value={contactInfo.socialMedia}
              onChange={handleContactInfoChange}
              placeholder="Social Media"
              className="p-2 border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="link"
              value={contactInfo.link}
              onChange={handleContactInfoChange}
              placeholder="Link"
              className="p-2 border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-blue-500 px-4 py-2 rounded-md focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InstagramComprar;

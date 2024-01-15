/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calcularPrecioAsync, selectCantidad, selectFinalPrice, setCantidad } from './Hooks/twitterSlice';
import QuantitySection from './TwitterCalculo';
import axios from 'axios';
import { API_COMPRAR } from '../../config';
import Swal from 'sweetalert2';

const TwitterComprar = ({ service }) => {
  const cantidad = useSelector(selectCantidad);
  const finalPrice = useSelector(selectFinalPrice);
  const dispatch = useDispatch();
  const [result, setResult] = useState(null)
  const [contactInfo, setContactInfo] = useState({
    email: '',
    socialMedia: '',
    quantity: '', // Cambiado de 'link' a 'quantity'
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

  const handleCalcularCantidadClick = () => {
    dispatch(calcularPrecioAsync(service, cantidad));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Muestra un mensaje de advertencia usando SweetAlert2
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to make a purchase. Do you want to proceed?, This purchase is irreversible once payment is made through the Mercado Pagos.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, proceed!',
      cancelButtonText: 'Cancel',
    });

    // Si el usuario confirma, realiza la solicitud POST
    if (result.isConfirmed) {
      try {
        const requestData = {
          items: {
            idService: service,
            quantity: contactInfo.quantity,
          },
          payerInfo: {
            email: contactInfo.email,
            link: contactInfo.socialMedia,
          },
        };

        const response = await axios.post(API_COMPRAR, requestData);

        setResult(response.data)
        setContactInfo({
          email: '',
          socialMedia: '',
          quantity: '',
        });

        // Muestra un mensaje de éxito usando SweetAlert2
        Swal.fire({
          title: 'Purchase Successful!',
          text: 'Purchase made now proceed with payment. ',
          icon: 'success',
        });
        window.open(response.data.sandboxInitPoint, '_blank');
      } catch (error) {
        console.error('Error al realizar la compra:', error);

        // Muestra un mensaje de error usando SweetAlert2
        Swal.fire({
          title: 'Error',
          text: 'An error occurred during the purchase. Please try again later.',
          icon: 'error',
        });
      }
    }
  };



  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10  w-full">
      <div className="w-full md:w-1/2">
        <QuantitySection
          cantidad={cantidad}
          finalPrice={finalPrice}
          handleCantidadChange={handleCantidadChange}
          handleCalcularCantidadClick={handleCalcularCantidadClick}
        />
      </div>
      <div className="w-full md:w-1/2 p-4 rounded-md">
        <h3 className='text-center'>Fill the form</h3>
        <form onSubmit={handleFormSubmit}>
          <label className="block text-sm font-medium text-white">Contact Information:</label>
          <div className="mb-2">
            <input
              type="email"
              name="email"
              required
              value={contactInfo.email}
              onChange={handleContactInfoChange}
              placeholder="Example: youremail@example.com"
              className="p-2 border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              required
              name="socialMedia"
              value={contactInfo.socialMedia}
              onChange={handleContactInfoChange}
              placeholder="Example: http://instagram.com/yourusername"
              className="p-2 border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="quantity"
              required
              value={contactInfo.quantity}
              onChange={handleContactInfoChange}
              placeholder="Example: 1000"
              className="p-2 border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-green-500 hover:bg-green-500 hover:text-white border px-4 py-2 rounded-md focus:outline-none w-full md:w-auto"
          >
            Buy
          </button>
        </form>
        <div className='w-full  flex justify-center p-2'>
          {result !== null ? (
            <a target='_blank' className="px-4 py-2 text-center w-full bg-green-400 hover:bg-green-700 rounded text-white" href={`${result.sandboxInitPoint}`} rel="noreferrer" >Pay Purchase</a>
          ) : (
            null
          )}
        </div>

      </div>
    </div>
  );
};

export default TwitterComprar;

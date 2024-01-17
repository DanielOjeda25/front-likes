import React, { useState } from 'react';
import axios from 'axios';
import { API_CONSULTAR } from '../../config';

const VerOrdenes = () => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const formatCreatedAt = (createdAt) => {
    if (createdAt) {
      const [datePart, timePart] = createdAt.split(' ');
      const [day, month, year] = datePart.split('-');
      const [hours, minutes, seconds] = timePart.split(':');

      const formattedDate = `${padWithZero(day)}/${padWithZero(month)}/${year}`;
      const formattedTime = `${padWithZero(hours)}:${padWithZero(minutes)} hs`;

      return `${formattedDate} - ${formattedTime}`;
    } else {
      return 'Unknown Date and Time';
    }
  };

  const padWithZero = (number) => {
    return number.toString().padStart(2, '0');
  };

  const handleConsultarClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_CONSULTAR}?email=${email}`);
      setResult(response.data);
    } catch (error) {
      console.error('Error al realizar la consulta:', error);
      // Handle the error as needed
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleConsultarClick();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleConsultarClick();
    }
  };
  return (
    <div className="md:w-1/2 mx-auto mt-10 p-4 border border-gray-300 rounded-md ">
      <h2 className="text-xl font-semibold mb-4">Order Consultation</h2>
      <form className="space-y-4 " onSubmit={handleSubmit} >
        <div className="flex flex-col items-center w-full">
          <label htmlFor="email" className="block text-sm font-medium text-left text-gray-700 w-full">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            onKeyDown={handleKeyPress}
            placeholder="Enter your email"
            className="mt-1 p-2 border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="button"
          onClick={handleConsultarClick}
          className="bg-blue-500 w-full hover:bg-blue-800 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          Consult
        </button>
      </form>

      {loading ? (
        <div className="flex items-center justify-center mt-4">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : result.length > 0 ? (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Purchase Information</h3>
          <p>
            <span className="font-semibold">Email:</span> {result[0]?.email}
          </p>
          <p>
            <span className="font-semibold">Order Id:</span> {result[0]?.orderId}
          </p>
          <p>
            <span className="font-semibold">Quantity:</span> {result[0]?.quantity}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {result[0]?.price}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {result[0]?.statusPayment}
          </p>
          <p>
            <span className="font-semibold">Created:</span> {formatCreatedAt(result[0]?.created_at) || ''}
          </p>
        </div>
      ) : (
        <p className="mt-4 text-gray-500  text-center">No data available</p>
      )}
    </div>
  );
};

export default VerOrdenes;

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
        <p className="mt-4 text-gray-500">Loading...</p>
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

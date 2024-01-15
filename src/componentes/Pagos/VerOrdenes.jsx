import React, { useState } from 'react';
import axios from 'axios';
import { API_CONSULTAR } from '../../config';

const VerOrdenes = () => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const formatCreatedAt = (createdAt) => {
    const [datePart, timePart] = createdAt.split(' ');
    const [day, month, year] = datePart.split('-');
    const [hours, minutes, seconds] = timePart.split(':');

    const formattedDate = `${padWithZero(day)}/${padWithZero(month)}/${year}`;
    const formattedTime = `${padWithZero(hours)}:${padWithZero(minutes)} hs`;

    return `${formattedDate} - ${formattedTime}`;
  };

  const padWithZero = (number) => {
    return number.toString().padStart(2, '0');
  };

  const handleConsultarClick = async () => {
    try {
      const response = await axios.get(`${API_CONSULTAR}?email=${email}`);
      setResult(response.data);
    } catch (error) {
      console.error('Error al realizar la consulta:', error);
      // Maneja el error según tus necesidades
    }
  };

  return (
    <div className="md:w-1/2 mx-auto mt-10 p-4 border border-gray-300 rounded-md ">
      <h2 className="text-xl font-semibold mb-4">Order Consultation</h2>
      <form className="space-y-4 ">
        <div className="flex flex-col items-center w-full">
          <label htmlFor="email" className="block text-sm font-medium text-left text-gray-700 w-full">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="mt-1 p-2 border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="button"
          onClick={handleConsultarClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          Consult
        </button>
      </form>

      {result != null && (
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
            <span className="font-semibold">Created:</span> {formatCreatedAt(result[0]?.created_at)}
          </p>
        </div>
      )}
    </div>
  );
};

export default VerOrdenes;

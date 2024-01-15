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
    console.log(createdAt); // "14-01-2024 03:19:19.100"

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
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Order consultation</h2>
      <form>
        <label className="block text-sm font-medium text-gray-700">Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="mt-1 p-2 border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-blue-500"
        />
        <button
          type="button"
          onClick={handleConsultarClick}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          Consult
        </button>
      </form>

      {result != null && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Purchase information</h3>
          <p>Email: {result[0]?.email}</p>
          <p>Order Id: {result[0]?.orderId}</p>
          <p>Quantity: {result[0]?.quantity}</p>
          <p>Price: {result[0]?.price}</p>
          <p>Status: {result[0]?.statusPayment}</p>
          <p>Created: {formatCreatedAt(result[0]?.created_at)}</p>
        </div>
      )}
    </div>
  );
};

export default VerOrdenes;

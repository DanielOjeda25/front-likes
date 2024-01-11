import React from 'react';
import ServicesCards from './ServicesCards';

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <ServicesCards />
      <ServicesCards />
      <ServicesCards />
      <ServicesCards />
    </div>
  );
}

export default ServicesGrid;

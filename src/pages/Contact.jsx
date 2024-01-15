import React from 'react';
import Navbar from '../componentes/Navbar/Navbar';
import Contactos from '../componentes/Contact/Contactos';
import Footer from '../componentes/Footer/Footer';

const Contact = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col items-center mt-5 h-screen w-full">
        <Contactos />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

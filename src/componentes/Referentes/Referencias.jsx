import React from "react";
import Tarjeta from "./Tarjeta";

const Referencias = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h3 className="text-3xl font-bold mb-4 text-indigo-600 text-center">¿Qué dice la gente sobre nosotros? 🔥</h3>
      <p className="text-gray-700 mb-6 text-center">
        Explora las experiencias auténticas de nuestros usuarios en Chile. Descubre lo que dicen acerca de nuestros servicios y cómo hemos impactado positivamente en sus experiencias en línea.
      </p>
      <div className="flex justify-center items-center mx-auto">
        <Tarjeta
          nombre="Sofía Montes"
          texto="Después de explorar diversas plataformas que ofrecían seguidores, encontré esta que me dejó muy satisfecha. Destaca por ser la única con garantía a largo plazo 💯. ¡Recomendada!"
        />
        <Tarjeta
          nombre="Carlos Rodríguez"
          texto="Increíble servicio. Rápido, seguro y con resultados reales. Mi presencia en redes sociales ha mejorado significativamente desde que comencé a utilizar sus servicios."
        />
        <Tarjeta
          nombre="Lorena González"
          texto="No solo cumplen con lo prometido, sino que también brindan un soporte al cliente excepcional. ¡Estoy encantada con los resultados y el trato recibido!"
        />
      </div>
    </div>
  );
};

export default Referencias;

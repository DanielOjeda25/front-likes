import video from '../../assets/pexels-rostislav-uzunov-9629255 (1080p).mp4';

const ComoComprar = () => {
  return (
    <div className="relative h-screen w-full" id='howto'>
      <video autoPlay muted loop className="object-cover w-full h-full absolute top-0 left-0 opacity-20">
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <div className="p-8 text-slate-900 text-center absolute inset-0 flex flex-col justify-center items-center">
        <h3 className="text-4xl font-bold mb-4">¿Cómo comprar un servicio?</h3>
        <p className="text-lg mb-8">
          Aumentar tu presencia en redes sociales se vuelve sencillo y rápido al utilizar nuestra plataforma.
          Solo necesitas seguir estos simples pasos:
        </p>

        <div className="mt-8">
          <h4 className="text-2xl font-semibold mb-4">Pasos para comprar:</h4>
          <ol className=" text-left pl-4 text-lg">
            <li className="mb-6">
              <span className="text-2xl font-semibold text-red-500 mr-2">1.</span>
              Crece en la red social que desees. Elige algún
              <a href="#home" className='underline'> servicio </a>
              que cumpla tus requerimientos de nuestro amplio catálogo.
            </li>
            <li className="mb-6">
              <span className="text-2xl font-semibold text-red-500 mr-2">2.</span>
              Indícanos lo que necesitas potenciar. No te solicitaremos tu contraseña, así que puedes crecer en redes sociales de forma segura y rápida.
            </li>
            <li>
              <span className="text-2xl font-semibold text-red-500 mr-2">3.</span>
              Completa el proceso de pago y ¡listo!
            </li>
          </ol>

        </div>
      </div>
    </div>
  );
};

export default ComoComprar;

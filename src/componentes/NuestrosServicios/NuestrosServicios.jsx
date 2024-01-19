import CardsServicios from "./CardsServicios";
import { calida, garantia, privacidad, tarjeta, telefono, tiempo } from "./Svg";

const NuestrosServicios = () => {
  return (
    <div className=" w-full py-10">
      <h2 className="text-center text-slate-900 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6">
        Nuestros Servicios son de CALIDAD{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
          className="inline"
        >
          <g fill="none" strokeLinejoin="round" strokeWidth="4">
            <path
              fill="#2F88FF"
              stroke="#000"
              d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
            />
            <path stroke="#fff" strokeLinecap="round" d="M16 24L22 30L34 18" />
          </g>
        </svg>
      </h2>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
          <CardsServicios
            title={"Nuestra garantía"}
            texto={
              "Nos dedicamos por completo a tu satisfacción, es nuestra principal prioridad. Por ello, te brindamos una garantía de por vida, con reposiciones gratuitas para asegurarnos de que siempre estés contento/a con nuestros servicios."
            }
            svg={garantia}
          />
          <CardsServicios
            title={"Privacidad y Seguridad"}
            texto={
              "Queremos tranquilizarte al decir que nunca solicitaremos tu contraseña. Puedes estar seguro/a de que tu información está protegida con nosotros."
            }
            svg={privacidad}
          />
          <CardsServicios
            title={"Pagos Seguros"}
            texto={"Aceptamos pagos por Mercado pago,etc"}
            svg={tarjeta}
          />
          <CardsServicios
            title={"Soporte de Calidad"}
            texto={
              "Nuestra asistencia técnica está disponible para resolver cualquier problema. Si tienes preguntas o inquietudes, no dudes en comunicarte con nosotros a través de WhatsApp al número: +56942004391."
            }
            svg={telefono}
          />
          <CardsServicios
            title={"Entrega Rápida"}
            texto={
              "Obtén resultados velozmente gracias a nuestro servicio que te permite adquirir seguidores, obtener likes y aumentar las visitas en tus contenidos"
            }
            svg={tiempo}
          />
          <CardsServicios
            title={"Servicios de alta calidad"}
            texto={
              "Accede a los servicios de máxima calidad con nosotros, donde te ofrecemos excelentes precios, un servicio destacado y una atención al cliente de primera."
            }
            svg={calida}
          />
        </div>
      </div>
    </div>
  );
};

export default NuestrosServicios;

import { useSelector } from 'react-redux';
import { instagram } from '../Svgs/Instagram'
import { insta, instaLikes } from './InstaSVG'
import InstagramButtons from './InstagramButtons'
import { selectInstagramServices } from '../../pages/services/Hooks/serviciosInstagram';
import { useEffect, useState } from 'react';

const InstagramComponent = () => {
  const instagramServices = useSelector(selectInstagramServices);

  useEffect(() => {
    console.log(instagramServices);
  }, [instagramServices])
  return (
    <div className='' id='instagram'>
      <div className="mt-5">
        <InstagramServicesTable services={instagramServices} />
      </div>
    </div>
  )
}

export default InstagramComponent


const InstagramServicesTable = ({ services }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cleanServiceName = (name) => {
    // Eliminar texto entre corchetes [...]
    return name.replace(/\[[^\]]+\]/g, '').trim();
  };
  const handleBuyClick = (serviceId) => {
    console.log(`Buy service with ID: ${serviceId}`);
    // Aquí puedes implementar la lógica para realizar la compra del servicio
  };
  return (
    <div className="container mx-auto mt-8" id='tabla'>
      <input
        type="text"
        placeholder="Example 'Instagram Likes'"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="my-4 p-2 border border-gray-300 rounded w-full text-lg focus:outline-none focus:border-blue-500"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 border-b">Nombre</th>
              <th className="py-3 px-4 border-b">Tarifa</th>
              <th className="py-3 px-4 border-b">Mínimo</th>
              <th className="py-3 px-4 border-b">Máximo</th>
              <th className="py-3 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service) => (
              <tr key={service.service} className="hover:bg-gray-100 transition duration-300">
                <td className="py-2 px-4 border-b">{cleanServiceName(service.name)}</td>
                <td className="py-2 px-4 border-b">{service.rate}</td>
                <td className="py-2 px-4 border-b">{service.min}</td>
                <td className="py-2 px-4 border-b">{service.max}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-md focus:outline-none"
                    onClick={() => handleBuyClick(service.service)}
                  >
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
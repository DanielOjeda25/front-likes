/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectService } from "./Hooks/InstagramSlice";
import { useNavigate } from "react-router-dom";

const InstagramServicesTable = ({ services }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cleanServiceName = (name) => {
    return name.replace(/\[[^\]]+\]/g, "").trim();
  };

  const handleBuyClick = (serviceId) => {
    dispatch(selectService(serviceId));
    navigate(`/services/instagram/comprar/${serviceId}`);
  };

  return (
    <div className="container mx-auto mt-8 overflow-x-auto" id="tabla">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Example 'Instagram Likes'"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="my-4 p-2 border border-gray-300 rounded w-1/2 text-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className=" bg-white border border-gray-300 shadow-md rounded-md">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">Fee</th>
              <th className="py-3 px-4 border-b">Min</th>
              <th className="py-3 px-4 border-b">Max</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service) => (
              <tr
                key={service.service}
                className="hover:bg-gray-100 transition duration-300"
              >
                <td className="py-2 px-2 border-b text-balance">
                  {cleanServiceName(service.name)}{" "}
                  <button
                    className="bg-green-500 text-white px-4 py-1 rounded focus:outline-none"
                    onClick={() => handleBuyClick(service.service)}
                  >
                    Buy
                  </button>
                </td>
                <td className="py-2 px-4 border-b">{service.rate}</td>
                <td className="py-2 px-4 border-b">{service.min}</td>
                <td className="py-2 px-4 border-b">{service.max}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default InstagramServicesTable;

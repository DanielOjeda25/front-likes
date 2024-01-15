import { email, mapa, phone, copy } from "../Svgs/utils";

const Contact = () => {
  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <p className="text-gray-800">
          We are committed to always meeting your expectations. Our team is here
          24 hours a day, 7 days a week, to address your needs promptly and with
          dedication. Your satisfaction is our priority, and we are ready to
          provide you with exceptional service at every step of your experience
          with us.
        </p>

        <div className="flex flex-col mt-4">
          <div className="bg-white p-4 rounded-md shadow-md flex items-center gap-4">
            {mapa}
            <div>
              <div className="font-medium text-gray-800">Address</div>
              <div className="text-sm text-gray-500">
                Province, Santiago de Chile
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md flex items-center gap-4 mt-4">
            {email}
            <div className="flex justify-between w-full">
              <div>
                <div className="font-medium text-gray-800">Email</div>
                <div className="text-sm text-gray-500">contacto@sigmanet.cl</div>
              </div>
              <button
                title="Copy Email"
                onClick={() => copyToClipboard("contacto@sigmanet.cl")}
              >
                {copy}
              </button>
            </div>

          </div>

          <div className="bg-white p-4 rounded-md shadow-md flex items-center gap-4 mt-4">
            {phone}
            <div className="flex justify-between w-full">
              <div>
                <div className="font-medium text-gray-800">Phone</div>
                <div className="text-sm text-gray-500">+56942004391</div>
              </div>
              <button
                title="Copy Phone"
                onClick={() => copyToClipboard("+56942004391")}
              >
                {copy}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

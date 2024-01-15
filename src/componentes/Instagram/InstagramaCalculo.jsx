
const QuantitySection = ({ cantidad, finalPrice, handleCantidadChange, handleCalcularCantidadClick }) => {
  return (
    <div className="mb-4 items-center flex flex-col justify-center mx-3">
      <h3>Calculate by quantity</h3>
      <label className="block text-sm font-medium text-gray-700 mt-5 text-left  w-full">Quantity:</label>
      <input
        value={cantidad}
        required
        onChange={handleCantidadChange}
        placeholder='Enter quantity'
        className="mt-1 p-2 border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-blue-500"
      />
      <div className="flex flex-col items-center mt-4">
        <p className="text-slate-900 font-bold text-2xl">Final Price:</p>
        {finalPrice !== null ? (
          <p className="text-slate-900 text-2xl">$ {finalPrice.toFixed(5)} dollar</p>
        ) : (
          <p className="text-slate-900 text-sm">Awaiting calculation...</p>
        )}
      </div>
      <button
        onClick={handleCalcularCantidadClick}
        className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded mt-4 w-full sm:w-auto sm:ml-2 focus:outline-none"
      >
        Calculate
      </button>
    </div>
  );
};

export default QuantitySection;

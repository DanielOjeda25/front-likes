
const YoutubeButtons = ({ text, svg }) => {
  return (
    <button className="flex items-center rounded px-4 py-2 text-white m-1 justify-center bg-gradient-to-r from-red-600 to-yellow-500 transition-transform transform hover:scale-105">
      Buy {text}
      {svg}
    </button>
  );
}

export default YoutubeButtons;

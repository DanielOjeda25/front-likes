
const ServicesCards = ({ to, svg, title, buttons }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-transform transform hover:scale-105">
      <a href={to} className="text-center flex justify-center p-2">
        {svg}
      </a>
      <div className="p-5">
        <a href="/services/facebook">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex flex-col w-full mx-auto justify-center items-center">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className="inline-flex items-center px-3 py-2 font-normal text-center text-white bg-red-500 hover:bg-red-900 rounded my-2"
            >
              {button.text}
              {button.icon && (
                <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22zm4-16h4q0-.825-.587-1.412T12 4q-.825 0-1.412.588T10 6m5 5q.425 0 .713-.288T16 10V8h-2v2q0 .425.288.713T15 11m-6 0q.425 0 .713-.288T10 10V8H8v2q0 .425.288.713T9 11" /></svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;

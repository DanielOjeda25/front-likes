const Header = () => {
  return (
    <header className='bg-red-400 w-full justify-center items-center flex flex-col h-3/4 py-5'>
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white text-center">
        Boost Your Social Presence with SMM Matrix
      </h1>
      <p className="mb-6 mx-2 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Unlock the power of social media! At SMM Matrix, we specialize in strategies that elevate your online presence, drive engagement, and help you reach new heights in the digital landscape.
      </p>
      <a
        href="#services"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-500 hover:bg-red-900 rounded "
      >
        Explore Our Services
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </header>
  );
};

export default Header;

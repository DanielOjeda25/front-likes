import React from 'react';

const HeaderFacebook = () => {
  return (
    <header className='bg-gradient-to-r from-blue-500 to-indigo-500 w-full justify-center items-center flex flex-col h-3/4 py-10 shadow-md'>
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white text-center">
        Boost Your Facebook Presence with SMM Boosters
      </h1>
      <p className="mb-6 mx-2 text-center text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Supercharge your Facebook engagement! SMM Boosters offers packages to enhance your likes and followers, taking your Facebook presence to new heights.
      </p>
      <a
        href="#facebook"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-600 hover:bg-blue-900 rounded "
      >
        Explore Facebook Boosting Packages
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
}

export default HeaderFacebook;
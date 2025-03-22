import React from "react";

const Header = () => {
  return (
    <div className="h-20 shadow-sm dark:bg-dark-blue">
      <div className="flex items-center justify-between container mx-auto p-4 h-full">
        <h2 className="font-bold md:text-xl lg:text-2xl">
          Where in the world?
        </h2>
        <div className="flex items-center gap-[6px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 dark:fill-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753
                9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
          <span>Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

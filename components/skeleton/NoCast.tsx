import React from "react";

type Props = {
  imageSize?: boolean;
};

function NoCast({ imageSize }: Props) {
  return (
    <div
      role="status"
      className="p-4 max-w-sm items-center rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700"
    >
      <div
        className={
          imageSize
            ? "flex items-center space-x-3 justify-center h-[380px] w-[250px]"
            : "flex items-center space-x-3 justify-center h-[150px]"
        }
      >
        <svg
          className="w-20 h-20 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default NoCast;

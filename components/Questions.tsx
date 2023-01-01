import React from "react";

type Props = {};

function Questions({}: Props) {
  return (
    <div className="flex flex-col h-[85vh] lg:h-[95vh] text-white px-8 sm:px-14 md:px-28 lg:px-48 xl:px-80 mt-2 sm:mt-14">
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-bold text-center px-14 md:px-0">
        Frequently Asked Questions
      </h1>
      <div className="flex justify-between p-3 lg:p-5 mt-5 md:mt-10 bg-[#303030] cursor-pointer">
        <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl">
          What is Netflix?
        </h2>
        <img
          className="w-8 md:w-6 md:h-6 p-2 md:p-0"
          src="./assets/plus.png"
          alt="plus"
        />
      </div>
      <div className="flex justify-between p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer">
        <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl">
          How much does Netflix cost?
        </h2>
        <img
          className="w-8 p-2 md:w-6 md:h-6 md:p-0"
          src="./assets/plus.png"
          alt="plus"
        />
      </div>
      <div className="flex justify-between p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer">
        <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl">
          Where can I watch?
        </h2>
        <img
          className="w-8 p-2 md:w-6 md:h-6 md:p-0"
          src="./assets/plus.png"
          alt="plus"
        />
      </div>
      <div className="flex justify-between p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer">
        <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl">
          How do I cancel?
        </h2>
        <img
          className="w-8 p-2 md:w-6 md:h-6 md:p-0"
          src="./assets/plus.png"
          alt="plus"
        />
      </div>
      <div className="flex justify-between p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer">
        <h2 className="text-md sm:text-md sm:text-lg md:text-xl lg:text-2xl">
          What can I watch on Netflix?
        </h2>
        <img
          className="w-8 p-2 md:w-6 md:h-6 md:p-0"
          src="./assets/plus.png"
          alt="plus"
        />
      </div>
      <div className="flex justify-between p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer">
        <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl">
          Is Netflix good for kids?
        </h2>
        <img
          className="w-8 p-2 md:w-6 md:h-6 md:p-0"
          src="./assets/plus.png"
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Questions;

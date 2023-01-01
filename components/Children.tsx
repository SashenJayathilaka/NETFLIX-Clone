import React from "react";

type Props = {};

function Children({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row h-[60%] p-8 text-white text-center lg:pl-24 xl:pl-44 lg:text-start border-b-8 border-gray-800 xl:px-28">
      <div className="flex flex-col lg:justify-center items-center xl:pl-[5%] xl:max-w-[60%] lg:order-1">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl lg:self-start font-bold my-3">
          Create profiles for children.
        </h1>
        <h2 className="text-md sm:text-xl lg:text-xl font-semibold my-2 xl:mr-8">
          Send children on adventures with their favourite characters in a space
          made just for them—free with your membership.
        </h2>
      </div>
      <div>
        <img
          className="my-6 md:max-w-[35rem] lg:w-[27rem] md:ml-[12%] lg:ml-0"
          src="./assets/children.png"
          alt="children"
        />
      </div>
    </div>
  );
}

export default Children;

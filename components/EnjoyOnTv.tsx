import React from "react";

type Props = {};

function EnjoyOnTv({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row h-[60%] p-8 text-white text-center lg:pl-4 lg:text-start border-b-8 border-gray-800 xl:px-28">
      <div className="flex flex-col lg:justify-center items-center xl:ml-[10%] xl:max-w-[40%]">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl lg:self-start font-bold my-3">
          Enjoy on your TV.
        </h1>
        <h2 className="text-md sm:text-xl lg:text-xl font-semibold my-2 xl:mr-8">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </h2>
      </div>
      <div className="relative">
        <img
          className="my-6 md:max-w-[40rem] lg:w-[30rem] md:ml-[12%] lg:ml-0 object-contain"
          src="./assets/tv.png"
          alt="img1"
        />

        <div className="top-[85px] left-[52px] sm:top-[122px] sm:left-[80px] absolute lg:top-[100px] lg:left-[62px] md:top-[125px] md:left-[185px] z-0">
          <video
            autoPlay
            playsInline
            muted
            loop
            className="w-[280px] md:w-[465px] sm:w-[450px] lg:w-[350px] z-0"
          >
            <source
              src="https://drive.google.com/uc?export=download&id=1i_6u8bQQGXc5yHgFTgz5xeobJcHQUmR_"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default EnjoyOnTv;

import React from "react";

type Props = {};

function Membership({}: Props) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <p className="text-white text-center font-medium">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <input
          className="h-12 md:h-14 xl:h-16 w-[70vw] sm:w-[28rem]  md:w-[28rem] lg:w-[34rem] sm:my-2"
          type="email"
          name="email"
          placeholder="  Email address"
        />
        <button className="flex self-center w-32 md:w-52 items-center bg-red-600 hover:bg-[#e50914] pl-4 md:pl-7 h-10 md:h-14 xl:h-16 m-2 md:m-0 md:text-2xl rounded">
          Get Started
          <img
            className="w-4 md:w-7 pt-1 text-white"
            src="./assets/right-arrow-angle.png"
            alt="right-angle"
          />
        </button>
      </div>
    </div>
  );
}

export default Membership;

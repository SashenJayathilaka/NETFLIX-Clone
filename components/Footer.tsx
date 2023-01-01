import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <div className="flex flex-col text-[#737373] px-14 md:px-28 lg:px-40 xl:px-64 mt-14">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-sm my-4">
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">FAQ</li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            Investor Relations
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            Privacy
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            Speed Test
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            Help Centre
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">Jobs</li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            Cookie Preferences
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            Legal Notices
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            Account
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            Ways to Watch
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            Corporate Information
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            Only on Netflix
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            Media Centre
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            Terms of Use
          </li>
          <li className="my-1 md:mr-4 hover:underline cursor-pointer">
            {" "}
            <a href="https://www.linkedin.com/in/naveen-polasa/">
              Contact Us
            </a>{" "}
          </li>
        </ul>
        <button className="flex justify-center items-center font-medium h-12 w-36 border border-[#737373]">
          <img className="w-4 m-3  " src="https://raw.githubusercontent.com/SashenJayathilaka/NETFLIX-Clone/master/public/assets/globe%20(1).png" alt="globe" />
          English
          <img
            className="w-3 m-2 pt-0.5"
            src="/assets/down-filled-triangular-arrow.png"
            alt="drop-down"
          />
        </button>
        <p className="my-6 text-sm">Netflix</p>
      </div>

      <div className="h-9 py-1 text-white text-center bg-[#333333]">
        For Educational Purposes Only
      </div>
    </div>
  );
}

export default Footer;

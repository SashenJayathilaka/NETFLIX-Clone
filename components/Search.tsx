import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  searchThrem: string;
  setSearchTerm: any;
};

function Search({ setSearchTerm, searchThrem }: Props) {
  return (
    <div className="hidden md:flex justify-center items-center text-center">
      <div className="bg-transparent hover:bg-gray-900 px-4 rounded-xl items-center text-center flex">
        <input
          value={searchThrem}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Movie"
          className="bg-transparent text-lg font-medium hover:bg-gray-900 w-[400px] h-[50px] px-4 py-2 rounded-xl placeholder:text-lg font-md text-white outline-none focus:bg-gray-900"
        />
        <button className="px-2.5">
          <AiOutlineSearch className="hidden sm:inline sm:w-6 sm:h-6 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default Search;

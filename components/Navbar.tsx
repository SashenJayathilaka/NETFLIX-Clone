import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { AiFillBell, AiOutlineSearch } from "react-icons/ai";
import { RiNetflixFill } from "react-icons/ri";
import Search from "./Search";

type Props = {
  isSearch?: boolean;
  setSearchTerm?: any;
  searchThrem?: string;
};

function Navbar({ isSearch, setSearchTerm, searchThrem }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${isScrolled && "bg-[#141414]"} hover:bg-[#141414]`}
    >
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="netflix"
          width={120}
          height={120}
          className="cursor-pointer object-contain"
          onClick={() => router.push("/")}
        />

        <ul className="hidden md:space-x-4 md:flex cursor-pointer">
          <li
            className="cursor-pointer text-[16px] hover:underline font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]"
            onClick={() => router.push("/")}
          >
            Home
          </li>
          <li
            className="cursor-pointer text-[16px] hover:underline font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]"
            onClick={() => router.push("/tv")}
          >
            TV Shows
          </li>
          <li
            className="cursor-pointer text-[16px] hover:underline font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]"
            onClick={() => router.push("/")}
          >
            Movies
          </li>
          <li
            className="cursor-pointer text-[16px] hover:underline font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]"
            onClick={() => router.push("/people")}
          >
            People
          </li>
          <li
            className="cursor-pointer text-[16px] hover:underline font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]"
            onClick={() => router.push("/favourite")}
          >
            Favourite
          </li>
          <li
            className="cursor-pointer text-[16px] hover:underline font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]"
            onClick={() => router.push("/about")}
          >
            About
          </li>
        </ul>
      </div>

      <div className="font-light flex items-center space-x-4 text-sm">
        {isSearch ? (
          <Search searchThrem={searchThrem!} setSearchTerm={setSearchTerm} />
        ) : (
          <AiOutlineSearch
            className="hidden sm:inline sm:w-6 sm:h-6 cursor-pointer"
            onClick={() => router.push("/")}
          />
        )}
        <AiFillBell className="h-6 w-6 cursor-pointer" />
        <RiNetflixFill className="h-6 w-6 cursor-pointer text-red-800" />
        <div onClick={() => signOut()} className="cursor-pointer">
          <img
            src={session?.user?.image!}
            alt={session?.user?.name!}
            className="cursor-pointer w-8 rounded-sm"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

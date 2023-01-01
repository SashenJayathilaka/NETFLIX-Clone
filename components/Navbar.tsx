import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { AiFillBell, AiOutlineSearch } from "react-icons/ai";

type Props = {};

function Navbar({}: Props) {
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
    <header className={`header ${isScrolled && "bg-[#141414]"}`}>
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
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            Home
          </li>
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            TV Shows
          </li>
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            Movies
          </li>
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            New &amp; Popular
          </li>
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            My List
          </li>
        </ul>
      </div>

      <div className="font-light flex items-center space-x-4 text-sm">
        <AiOutlineSearch className="hidden sm:inline sm:w-6 sm:h-6 cursor-not-allowed" />
        <AiFillBell className="h-6 w-6 cursor-not-allowed" />
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

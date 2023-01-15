import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

import { Cast } from "../typings";
import NoCast from "./skeleton/NoCast";

type Props = {
  cast: Cast;
  baseUrl: string;
};

function Person({ cast, baseUrl }: Props) {
  const router = useRouter();

  const handleNavigatePage = () => {
    router.push({
      pathname: `${process.env.NEXT_PUBLIC_AUTH_URL}/cast/${cast.id}`,
      query: {
        castId: cast.id.toString(),
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="bg-gray-900 relative h-auto min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-[320px] md:min-w-[150px] px-2 py-2 md:hover:scale-105 rounded-md shadow-lg items-center hover:bg-gray-800"
      onClick={handleNavigatePage}
    >
      {cast.profile_path ? (
        <img
          src={`${baseUrl}${cast.profile_path}`}
          className="w-36 items-center m-auto p-auto"
          alt=""
        />
      ) : (
        <NoCast />
      )}

      <h1 className="text-gray-300 font-bold text-lg">
        {cast.name || cast.original_name}
      </h1>
      <p className="text-gray-300 text-sm line-clamp-3">{cast.character}</p>
    </motion.div>
  );
}

export default Person;

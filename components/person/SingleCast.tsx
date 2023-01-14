import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

import { CastDataTyping } from "../../typings";
import ImageSkelten from "../skeleton/ImageSkelten";

type Props = {
  crewData: CastDataTyping;
  baseUrl: string;
};

function SingleCast({ crewData, baseUrl }: Props) {
  const router = useRouter();

  const handleChangePage = () => {
    router.push({
      pathname: `${process.env.NEXT_PUBLIC_AUTH_URL}/details/${crewData.id}`,

      query: {
        movieId: crewData.id.toString(),
        type: "movie",
      },
    });
  };

  return (
    <motion.div
      className="bg-transparent relative h-auto min-w-[180px] cursor-pointer transition-transform duration-200 items-center ease-out md:h-[400px] md:min-w-[200px] px-2 py-2 md:hover:scale-105 rounded-md shadow-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onClick={handleChangePage}
    >
      {crewData.poster_path ? (
        <img
          src={`${baseUrl}${crewData.poster_path}`}
          alt=""
          className="w-[200px]"
        />
      ) : (
        <ImageSkelten />
      )}

      <h1 className="text-gray-300 font-bold text-xl text-center py-2 line-clamp-3">
        {crewData.title}
      </h1>
    </motion.div>
  );
}

export default SingleCast;

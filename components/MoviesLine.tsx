import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Movie } from "../typings";
import { motion } from "framer-motion";

type Props = {
  movie: Movie;
  isDetails: Boolean;
  type: string;
};

function MoviesLine({ movie, isDetails, type }: Props) {
  const router = useRouter();

  const handleChangePage = () => {
    router.push({
      pathname: isDetails
        ? `https://netflix-sclone.vercel.app/details/${movie.id}`
        : `details/${movie.id}`,
      query: {
        movieId: movie.id.toString(),
        type: movie.media_type?.toString()
          ? movie.media_type?.toString()
          : type.toString(),
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
      onClick={handleChangePage}
      className={
        isDetails
          ? `relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-[200px] md:min-w-[350px] md:hover:scale-105`
          : `relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`
      }
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        layout="fill"
        className="rounded-sm object-cover md:rounded"
        alt={movie.name}
      />
    </motion.div>
  );
}

export default MoviesLine;

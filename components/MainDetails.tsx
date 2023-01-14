import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { Details } from "../typings";
import BannerDetailsSkeleton from "./skeleton/BannerDetailsSkeleton";
import BannerSkeleton from "./skeleton/BannerSkeleton";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = {
  movieDetails: Details | undefined;
};

function MainDetails({ movieDetails }: Props) {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 lg:pl-24">
      <div className="absolute top-0 left-0 h-[100vh] w-screen -z-10">
        {movieDetails?.backdrop_path || movieDetails?.poster_path ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={`${baseUrl}/${
                movieDetails?.backdrop_path || movieDetails?.poster_path
              }`}
              alt={
                movieDetails?.title ||
                movieDetails?.name ||
                movieDetails?.original_name!
              }
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        ) : (
          <BannerSkeleton />
        )}

        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-800 to-transparent bottom-0 z-20" />
      </div>

      {movieDetails?.title ||
      movieDetails?.name ||
      movieDetails?.original_name ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
            {movieDetails?.title ||
              movieDetails?.name ||
              movieDetails?.original_name}
          </h1>
          <p className="text-sm font-semibold py-6">
            Release Date: {movieDetails.release_date}
          </p>
          <p className="max-w-xs text-shadow-md text-xs md:max-w-xl md:text-lg lg:max-w-2xl line-clamp-5">
            {movieDetails?.overview}
          </p>
        </motion.div>
      ) : (
        <BannerDetailsSkeleton />
      )}
    </div>
  );
}

export default MainDetails;

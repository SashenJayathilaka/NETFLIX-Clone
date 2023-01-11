import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

import { Seasons } from "../typings";

type Props = {
  season: Seasons;
  baseUrl: string;
};

function Seasson({ season, baseUrl }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-[400px] md:min-w-[200px] items-center"
    >
      <p
        className={`text-lg py-2.5 text-gray-400 ${
          !season.poster_path && "animate-pulse"
        }`}
      >
        {season.name}
      </p>
      {season.poster_path ? (
        <img
          src={`${baseUrl}${season.poster_path}`}
          alt={season.name}
          className="rounded-sm object-cover md:rounded w-[180px]"
        />
      ) : (
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
        >
          <div className="relative flex items-center justify-center w-[200px] h-[300px] bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-12 h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
            <p className="absolute text-gray-800 font-medium">Comming Soon!</p>
          </div>
        </div>
      )}

      <p
        className={`text-sm font-medium text-gray-400 text-start ${
          !season.poster_path && "animate-pulse"
        }`}
      >
        Season Number:{" "}
        <span className="text-white">
          {season.season_number ? season.season_number : "Not Yet"}
        </span>
      </p>
      <p
        className={`text-sm font-medium text-gray-400 text-start ${
          !season.poster_path && "animate-pulse"
        }`}
      >
        Episode Count:{" "}
        <span className="text-white">
          {season.episode_count ? season.episode_count : "Not Yet"}
        </span>
      </p>
      <p
        className={`text-sm font-medium text-gray-400 text-start ${
          !season.poster_path && "animate-pulse"
        }`}
      >
        Air Date:{" "}
        <span className="text-white">
          {season.air_date ? season.air_date : "Not Yet"}
        </span>
      </p>
    </motion.div>
  );
}

export default Seasson;

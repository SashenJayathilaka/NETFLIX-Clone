import { motion } from "framer-motion";
import React from "react";

import { Episode } from "../../typings";
import baseUrl from "../../utils/baseUrl";

type Props = {
  episode: Episode;
};

function Episodes({ episode }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="h-auto min-w-[180px] cursor-pointer md:h-auto md:min-w-[380px] items-center px-6 py-6 p-auto m-auto shadow-lg"
    >
      <p
        className={`text-xl font-bold py-2.5 text-gray-100 ${
          !episode.still_path && "animate-pulse"
        }`}
      >
        {episode.name}
      </p>

      <div className="inline-block md:flex justify-start items-center gap-8">
        {episode.still_path ? (
          <img
            src={`${baseUrl}${episode.still_path}`}
            alt={episode.name}
            className="w-[400px] min-w-[400px] rounded-sm object-cover md:rounded"
          />
        ) : (
          <img
            src="https://i0.wp.com/authormarystone.com/wp-content/uploads/2019/01/comingsoon.jpg?resize=576%2C864"
            alt="img/no"
            className="rounded-sm object-cover md:rounded w-[180px] animate-pulse"
          />
        )}
        <div className="space-y-6">
          <p
            className={`text-[15px] font-medium text-gray-400 text-start ${
              !episode.still_path && "animate-pulse"
            }`}
          >
            Episode Number:{" "}
            <span className="text-white">
              {episode.episode_number ? episode.episode_number : "Not Yet"}
            </span>
          </p>
          <p
            className={`text-[15px] font-medium text-gray-400 text-start ${
              !episode.still_path && "animate-pulse"
            }`}
          >
            Overview:
            <br />
            <span className="text-white">
              {episode.overview ? episode.overview : "Not Yet"}
            </span>
          </p>
          <p
            className={`text-[15px] font-medium text-gray-400 text-start ${
              !episode.still_path && "animate-pulse"
            }`}
          >
            Air Date:{" "}
            <span className="text-white">
              {episode.air_date ? episode.air_date : "Not Yet"}
            </span>
          </p>
          <p
            className={`text-[15px] font-medium text-gray-400 text-start ${
              !episode.still_path && "animate-pulse"
            }`}
          >
            Run Time:{" "}
            <span className="text-white">
              {episode.runtime ? episode.runtime : "Not Yet"}
            </span>
          </p>
          <div className="flex justify-between">
            <p
              className={`text-[15px] font-medium text-gray-400 text-start ${
                !episode.still_path && "animate-pulse"
              }`}
            >
              Vote Average:{" "}
              <span className="text-white">
                {episode.vote_average ? episode.vote_average : "Not Yet"}
              </span>
            </p>
            <p
              className={`text-[15px] font-medium text-gray-400 text-start ${
                !episode.still_path && "animate-pulse"
              }`}
            >
              Vote Count:{" "}
              <span className="text-white">
                {episode.vote_count ? episode.vote_count : "Not Yet"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Episodes;

import { motion } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";

import { MovieTrailer } from "../../typings";
import TrailerSkeleton from "../skeleton/TrailerSkeleton";

type Props = {
  movieTrailer: MovieTrailer[];
  movieDetails: string;
};

function SeasonTrailer({ movieDetails, movieTrailer }: Props) {
  return (
    <div className="">
      <p className="text-2xl font-bold text-gray-300 px-2.5 py-2.5 mt-10">
        Videos | {movieDetails}
      </p>
      <div className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-1.0 md:p-2 h-[350px] overflow-y-hidden">
        {movieTrailer ? (
          <>
            {movieTrailer?.map((trailer) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                key={trailer.id}
                className="w-[500px] h-[300px] relative min-w-[180px] cursor-pointer items-center ease-out md:h-[300px] md:min-w-[500px] px-2 py-2 rounded-md hover:shadow-lg"
              >
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${trailer.key}`}
                  width="100%"
                  height="100%"
                  playing={false}
                  muted={false}
                />
                <p className="text-lg">{trailer.name}</p>
              </motion.div>
            ))}
          </>
        ) : (
          <>
            <TrailerSkeleton />
            <TrailerSkeleton />
            <TrailerSkeleton />
            <TrailerSkeleton />
          </>
        )}
      </div>
    </div>
  );
}

export default SeasonTrailer;

import { motion } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";

import { Details, Result } from "../typings";
import TrailerSkeleton from "./skeleton/TrailerSkeleton";

type Props = {
  movieTrailer: any;
  movieDetails: Details | undefined;
};

function Trailer({ movieTrailer, movieDetails }: Props) {
  return (
    <div className="">
      <h1 className="text-start text-white text-3xl font-bold">
        Videos |{" "}
        {movieDetails?.title ||
          movieDetails?.name ||
          movieDetails?.original_name}
      </h1>
      <div className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-1.0 md:p-2 h-[350px] overflow-y-hidden">
        {movieTrailer?.results ? (
          <>
            {movieTrailer?.results?.map((trailer: Result) => (
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
                <p className="text-xl">{trailer.name}</p>
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

export default Trailer;

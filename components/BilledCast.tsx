import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { Cast } from "../typings";

import BilledCastSceleton from "./skeleton/BilledCastSceleton";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = {
  movieCast: any;
};

function BilledCast({ movieCast }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-60 space-y-0.5 md:space-y-2 items-center">
      <div className="group relative md:-ml-2 px-8">
        <h1 className="text-start text-white text-3xl font-bold">
          Top Billed Cast
        </h1>
        <BiChevronLeftCircle
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        <div
          className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-1.0 md:p-2"
          ref={rowRef}
        >
          {movieCast?.cast ? (
            <>
              {movieCast?.cast?.map((cast: Cast) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  key={cast.id}
                  className="bg-gray-900 relative h-auto min-w-[180px] cursor-pointer transition-transform duration-200 items-center ease-out md:h-[310px] md:min-w-[150px] px-2 py-2 md:hover:scale-105 rounded-md shadow-lg"
                >
                  <img
                    src={`${baseUrl}${cast.profile_path}`}
                    className="w-36"
                    alt=""
                  />
                  <h1 className="text-gray-300 font-bold">
                    {cast.name || cast.original_name}
                  </h1>
                  <p className="text-gray-300">{cast.character}</p>
                </motion.div>
              ))}
            </>
          ) : (
            <>
              <BilledCastSceleton />
              <BilledCastSceleton />
              <BilledCastSceleton />
              <BilledCastSceleton />
              <BilledCastSceleton />
              <BilledCastSceleton />
            </>
          )}
        </div>
        <BiChevronRightCircle
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default BilledCast;

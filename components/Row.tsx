import { title } from "process";
import React, { useRef, useState } from "react";

import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

import { Movie } from "../typings";
import MoviesLine from "./MoviesLine";

type Props = {
  movies: Movie[];
  title: string;
  isDetails: Boolean;
};

function Row({ movies, title, isDetails }: Props) {
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
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2
        className={
          isDetails
            ? `w-56 cursor-pointer text-xl font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-3xl`
            : `w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl`
        }
      >
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <BiChevronLeftCircle
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        <div
          ref={rowRef}
          className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <MoviesLine key={movie.id} movie={movie} isDetails={isDetails} />
          ))}
        </div>
        <BiChevronRightCircle
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Row;

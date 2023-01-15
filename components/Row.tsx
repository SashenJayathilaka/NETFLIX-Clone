import React, { useRef, useState } from "react";

import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

import { Movie } from "../typings";
import MoviesLine from "./MoviesLine";

type Props = {
  movies?: Movie[];
  title?: string;
  isDetails: boolean;
  type: string;
  isSearch?: boolean;
  isfavourite?: boolean;
  likeMovies?: any;
};

function Row({
  movies,
  title,
  isDetails,
  type,
  isSearch,
  isfavourite,
  likeMovies,
}: Props) {
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
    <div
      className={
        isfavourite || isSearch
          ? `h-auto space-y-0.5 md:space-y-2 px-1`
          : `h-40 space-y-0.5 md:space-y-2 px-4`
      }
    >
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
        {!isSearch && (
          <BiChevronLeftCircle
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && "hidden"
            }`}
            onClick={() => handleClick("left")}
          />
        )}

        {isfavourite ? (
          <div
            ref={rowRef}
            className={
              likeMovies?.length >= 4
                ? `gap-x-10 grid overflow-x-hidden gap-y-6 sm:gap-x-14 lg:gap-x-14 md:gap-x-10`
                : `flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2`
            }
          >
            {likeMovies!.map((movie: any) => (
              <MoviesLine
                key={movie.id}
                movie={movie.data()}
                isDetails={isDetails}
                type={type}
                isfavourite={isfavourite}
              />
            ))}
          </div>
        ) : (
          <div
            ref={rowRef}
            className={
              isSearch && movies!.length >= 4
                ? `grid overflow-x-hidden gap-y-6 gap-x-24`
                : `flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2`
            }
          >
            {movies?.map((movie) => (
              <MoviesLine
                key={movie.id}
                movie={movie}
                isDetails={isDetails}
                type={type}
              />
            ))}
          </div>
        )}

        {!isSearch && (
          <BiChevronRightCircle
            className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
            onClick={() => handleClick("right")}
          />
        )}
      </div>
    </div>
  );
}

export default Row;

import { useRef, useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

import { Cast } from "../typings";
import Person from "./Person";
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
          className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll overflow-y-hidden md:space-x-1.0 md:p-2"
          ref={rowRef}
        >
          {movieCast?.cast ? (
            <>
              {movieCast?.cast?.map((cast: Cast) => (
                <Person key={cast.id} cast={cast} baseUrl={baseUrl} />
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

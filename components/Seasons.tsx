import { Details } from "../typings";
import Seasson from "./Seasson";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = {
  movieDetails: Details | undefined;
};

function Seasons({ movieDetails }: Props) {
  return (
    <div>
      <p className="text-2xl font-bold text-gray-300 px-2.5 py-2.5 -mt-10">
        Seasons
      </p>

      <div className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 overflow-y-hidden">
        {movieDetails?.seasons?.map((season) => (
          <Seasson
            key={season.id}
            season={season}
            baseUrl={baseUrl}
            seasonId={movieDetails.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Seasons;

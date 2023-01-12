import { motion } from "framer-motion";

import { MovieTrailer, SeasonDetail } from "../../typings";
import baseUrl from "../../utils/baseUrl";
import NoCast from "../skeleton/NoCast";
import Episodes from "./Episodes";
import SeasonTrailer from "./SeasonTrailer";

type Props = {
  seasons: SeasonDetail;
  seasonVideo: MovieTrailer[];
};

function SeasonDetails({ seasons, seasonVideo }: Props) {
  return (
    <div className="overflow-x-hidden">
      <div className="inline-block md:flex justify-start gap-16 px-8 pl-16 pt-36 text-white items-center">
        <div className="items-center px-2.5 py-2.5">
          {seasons.poster_path ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={`${baseUrl}${seasons.poster_path}`}
                alt=""
                className="w-[300px] rounded-tl-2xl rounded-br-2xl"
              />
            </motion.div>
          ) : (
            <NoCast imageSize={true} />
          )}
        </div>
        <div className="px-8 py-8">
          {seasons.name ? (
            <motion.div
              className="space-y-3 max-w-3xl overflow-y-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold">{seasons.name}</p>
              <p className="text-xl font-medium text-gray-400 pt-2">Overview</p>
              <p className="line-clamp-6">{seasons.overview}</p>
              <div className="flex justify-between pt-2">
                <p className="font-medium text-gray-400">
                  Release Date:{" "}
                  <span className="text-white"> {seasons.air_date}</span>
                </p>
              </div>
            </motion.div>
          ) : (
            <div
              role="status"
              className="animate-pulse space-y-4 max-w-3xl overflow-hidden"
            >
              <div className="mb-12 w-screen">
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-[300px] mb-4"></div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[260px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[580px]"></div>
              <br />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
      {seasonVideo?.length > 0 && (
        <SeasonTrailer movieTrailer={seasonVideo} movieDetails={seasons.name} />
      )}
      <>
        {seasons?.episodes?.length > 0 && (
          <>
            <p className="text-2xl font-bold text-gray-300 px-2.5 py-2.5 mt-10">
              Episode {seasons?.episodes?.length}
            </p>
            <div className="overflow-hidden gap-y-6 items-center">
              {seasons?.episodes?.map((episode) => (
                <Episodes key={episode.id} episode={episode} />
              ))}{" "}
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default SeasonDetails;

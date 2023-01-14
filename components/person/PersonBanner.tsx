import { motion } from "framer-motion";

import PersonBookMark from "../PersonBookMark";
import NoCast from "../skeleton/NoCast";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = {
  castPerson: any;
};

function PersonBanner({ castPerson }: Props) {
  return (
    <div className="overflow-x-hidden">
      <div className="inline-block md:flex justify-start gap-16 px-8 pl-16 pt-36 text-white">
        <div className="items-center px-2.5 py-2.5">
          {castPerson.profile_path ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={`${baseUrl}${castPerson.profile_path}`}
                alt=""
                className="w-[300px] rounded-tl-2xl rounded-br-2xl"
              />
            </motion.div>
          ) : (
            <NoCast imageSize={true} />
          )}
        </div>
        <div className="px-8 py-8">
          {castPerson.name ? (
            <motion.div
              className="space-y-3 max-w-3xl overflow-y-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold">{castPerson.name}</p>
              <p>{castPerson.known_for_department}</p>
              <p className="text-xl font-medium text-gray-400 pt-2">
                Biography
              </p>
              <p className="line-clamp-6">{castPerson.biography}</p>
              <div className="flex justify-between pt-2">
                <p className="font-medium text-gray-400">
                  Place of Birth:{" "}
                  <span className="text-white">
                    {" "}
                    {castPerson.place_of_birth}
                  </span>
                </p>
                <p className="font-medium text-gray-400">
                  Birthday:{" "}
                  <span className="text-white">{castPerson.birthday}</span>
                </p>
                {castPerson.deathday && (
                  <p className="font-medium text-gray-400">
                    Deathday:{" "}
                    <span className="text-white">{castPerson.deathday}</span>
                  </p>
                )}
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-gray-400 pt-2">
                  Gender:{" "}
                  <span className="text-white">
                    {castPerson.gender === 2 ? "Male" : "Female"}
                  </span>
                </p>
                <p className="font-medium text-gray-400 pt-2">
                  Known Credits:{" "}
                  <span className="text-white">{castPerson.popularity}</span>
                </p>
              </div>
              <p className="text-xl font-medium text-gray-400 pt-4">
                Also Known As:
              </p>
              <div className="grid grid-cols-2 space-y-2">
                {castPerson?.also_known_as
                  ?.slice(0, 10)
                  .map((data: any, index: number) => (
                    <div key={index}>
                      <p className="text-sm">{data}</p>
                    </div>
                  ))}
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
      {castPerson.id && castPerson.name && (
        <PersonBookMark castPerson={castPerson} />
      )}
    </div>
  );
}

export default PersonBanner;

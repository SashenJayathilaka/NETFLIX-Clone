import { motion } from "framer-motion";
import React from "react";

import { Companies, Details, Genre, Languages } from "../typings";

import BannerDetailsSkeleton from "./skeleton/BannerDetailsSkeleton";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = {
  movieDetails: Details | undefined;
};

function MoreDetails({ movieDetails }: Props) {
  return (
    <div className="pt-16">
      <p className="text-start text-white text-3xl font-bold">MoreDetails</p>

      {movieDetails?.title ||
      movieDetails?.name ||
      movieDetails?.original_name ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="px-3 py-3">
            <p className="text-lg text-gray-500">Genres</p>
          </div>
          <div className="flex justify-start gap-10 px-3 py-3 items-center text-center">
            {movieDetails?.genres?.map((genres: Genre, index: number) => (
              <p key={index}>{genres.name}</p>
            ))}
          </div>
          <div className="px-3 py-3">
            <p className="text-lg text-gray-500">Spoken Languages</p>
          </div>
          <div className="flex justify-start gap-10 px-3 py-3 items-center text-center">
            {movieDetails?.spoken_languages?.map(
              (language: Languages, index: number) => (
                <p key={index}>
                  {index + 1}: {language.english_name}
                </p>
              )
            )}
          </div>
          <div className="px-3 py-3">
            <p className="text-lg text-gray-500">production companies</p>
          </div>
          <div className="flex justify-start gap-10 px-3 py-3 items-center text-center">
            {movieDetails?.production_companies?.map((companies: Companies) => (
              <div key={companies.id} className="shadow-lg">
                <img
                  src={`${baseUrl}${companies.logo_path}`}
                  alt=""
                  className="w-36"
                />
                <p className="pt-8">{companies.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="pt-8">
          <BannerDetailsSkeleton />
        </div>
      )}
    </div>
  );
}

export default MoreDetails;

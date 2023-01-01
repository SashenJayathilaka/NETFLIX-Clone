import React from "react";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = {
  movieDetails: any;
};

function Companies({ movieDetails }: Props) {
  return (
    <div className="flex justify-start gap-10 items-center px-8">
      {movieDetails?.production_companies?.map((companies: any) => (
        <div key={companies.id}>
          <img
            src={`${baseUrl}${companies.logo_path}`}
            alt=""
            className="w-36 shadow-xl"
          />
        </div>
      ))}
    </div>
  );
}

export default Companies;

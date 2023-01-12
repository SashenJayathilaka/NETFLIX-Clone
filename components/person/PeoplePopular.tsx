import React from "react";

import { PopularTyping } from "../../typings";
import PersonMaping from "./PersonMaping";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = {
  popular: PopularTyping[];
};

function PeoplePopular({ popular }: Props) {
  return (
    <div className="pt-36 overflow-x-hidden">
      <p className="text-4xl font-medium text-gray-400">Popular</p>
      <div className="grid space-x-5 space-y-8 pt-8">
        {popular?.map((person) => (
          <PersonMaping key={person.id} person={person} baseUrl={baseUrl} />
        ))}
      </div>
    </div>
  );
}

export default PeoplePopular;

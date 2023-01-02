import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import KnownFor from "./KnownFor";
import PersonBanner from "./PersonBanner";

type Props = {};

function PersonFeed({}: Props) {
  const router = useRouter();
  const { castId } = router.query;
  const [castData, setCastData] = useState([]);
  const [castPerson, setCastPerson] = useState([]);

  const fetchData = async (id: any) => {
    const movieCastData = await fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ).then((res) => res.json());

    const movieCastPersonData = await fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ).then((res) => res.json());

    setCastData(movieCastData.cast);
    setCastPerson(movieCastPersonData);
  };

  useEffect(() => {
    fetchData(castId);
  }, [castId, castData]);

  return (
    <main className="relative pl-4 pb-24 lg:space-y-24 overflow-x-hidden">
      <PersonBanner castPerson={castPerson} />
      <KnownFor castData={castData} />
    </main>
  );
}

export default PersonFeed;

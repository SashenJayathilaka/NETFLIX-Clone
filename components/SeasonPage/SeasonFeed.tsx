import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { SeasonDetail } from "../../typings";
import Footer from "../Footer";
import Navbar from "../Navbar";
import SeasonDetails from "./SeasonDetails";

type Props = {};

function SeasonFeed({}: Props) {
  const [seasons, setSeasons] = useState({});
  const [seasonVideo, setSeasonVideo] = useState([]);
  const router = useRouter();
  const { seasonId, seasonNumber } = router.query;

  const fetchData = async (seasonId: any, seasonNumber: any) => {
    const seasonsData = await fetch(
      `https://api.themoviedb.org/3/tv/${seasonId}/season/${seasonNumber}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ).then((res) => res.json());

    const seasonsVideo = await fetch(
      `https://api.themoviedb.org/3/tv/${seasonId}/season/${seasonNumber}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ).then((res) => res.json());

    setSeasons(seasonsData);
    setSeasonVideo(seasonsVideo.results);
  };

  useEffect(() => {
    fetchData(seasonId, seasonNumber);
  }, [seasonId, seasonNumber, seasons]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="relative pl-4 pb-24 lg:space-y-24">
        <SeasonDetails
          seasons={seasons as SeasonDetail}
          seasonVideo={seasonVideo}
        />
      </main>
      <Footer />
    </div>
  );
}

export default SeasonFeed;

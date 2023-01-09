import { onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { firestore } from "../firebase/firebase";
import EmptyMovie from "./EmptyMovie";
import LikeActress from "./LikeActress";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = {
  session: any;
};

function Actress({ session }: Props) {
  const [likeActress, setLikeAclikeActress] = useState<any[]>([]);

  useEffect(
    () =>
      onSnapshot(
        collection(
          firestore,
          "netflixUsers",
          session?.user?.uid,
          "likeActress"
        ),
        (snapshot) => setLikeAclikeActress(snapshot.docs)
      ),
    [firestore, session?.user?.uid]
  );

  return (
    <div className="overflow-x-hidden">
      <div
        className={
          likeActress.length >= 6
            ? `grid space-x-5 space-y-8 pt-0`
            : `flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2`
        }
      >
        {likeActress ? (
          <>
            {likeActress?.map((person) => (
              <LikeActress
                key={person.id}
                person={person.data()}
                baseUrl={baseUrl}
              />
            ))}
          </>
        ) : (
          <EmptyMovie />
        )}
      </div>
    </div>
  );
}

export default Actress;

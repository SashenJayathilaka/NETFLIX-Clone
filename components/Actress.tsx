import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { firestore } from "../firebase/firebase";
import EmptyMovie from "./EmptyMovie";
import LikeActress from "./LikeActress";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = {
  session: any;
};

function Actress({ session }: Props) {
  const [likeActress, setLikeAlikeActress] = useState<any[]>([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(
            firestore,
            "netflixUsers",
            session?.user?.uid,
            "likeActress"
          ),
          orderBy("popularity", "desc")
        ),
        (snapshot) => setLikeAlikeActress(snapshot.docs)
      ),
    [firestore, session?.user?.uid]
  );

  return (
    <div className="overflow-x-hidden">
      {likeActress.length > 0 ? (
        <div
          className={
            likeActress.length >= 6
              ? `grid space-x-5 space-y-8 pt-0`
              : `flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2`
          }
        >
          {likeActress?.map((person) => (
            <LikeActress
              key={person.id}
              person={person.data()}
              baseUrl={baseUrl}
            />
          ))}
        </div>
      ) : (
        <EmptyMovie />
      )}
    </div>
  );
}

export default Actress;

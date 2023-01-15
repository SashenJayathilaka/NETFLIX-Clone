import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { firestore } from "../firebase/firebase";
import Actress from "./Actress";
import EmptyMovie from "./EmptyMovie";
import Row from "./Row";

type Props = {
  session: any;
};

function FavoriteFeed({ session }: Props) {
  const [likeMovies, setLikeMovies] = useState<any[]>([]);
  const [isMovie, setIsMovie] = useState<boolean>(true);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(
            firestore,
            "netflixUsers",
            session?.user?.uid,
            "likeMovie"
          ),
          orderBy("vote_average", "desc")
        ),
        (snapshot) => setLikeMovies(snapshot.docs)
      ),
    [firestore, session?.user?.uid]
  );

  return (
    <main className="pl-4 pb-4 lg:space-y-24">
      <section className="md:space-y-16 pt-36 pb-4 mb-4">
        <div className="flex justify-start gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`text-xl font-semibold px-2.5 py-2.5 bg-transparent shadow-md hover:bg-gray-900 rounded-md ${
              isMovie && "bg-gray-900 shadow-2xl"
            }`}
            onClick={() => setIsMovie(true)}
          >
            Movie
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`text-xl font-semibold px-2.5 py-2.5 bg-transparent shadow-md hover:bg-gray-900 rounded-md ${
              !isMovie && "bg-gray-900 shadow-2xl"
            }`}
            onClick={() => setIsMovie(false)}
          >
            Actress
          </motion.button>
        </div>
        {isMovie ? (
          <>
            {likeMovies.length > 0 ? (
              <Row
                likeMovies={likeMovies}
                isDetails={true}
                type="movie"
                isSearch={true}
                isfavourite={true}
              />
            ) : (
              <EmptyMovie />
            )}
          </>
        ) : (
          <Actress session={session} />
        )}
      </section>
    </main>
  );
}

export default FavoriteFeed;

import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

import {
  BsFillBookmarkCheckFill,
  BsFillBookmarkDashFill,
} from "react-icons/bs";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { firestore } from "../firebase/firebase";

type Props = {
  movieDetails: any;
};

function AddBookmark({ movieDetails }: Props) {
  const [hasLikes, setHasLikes] = useState(false);
  const { data: session }: any = useSession();
  const [likes, setLikes] = useState<any[]>([]);

  useEffect(
    () =>
      onSnapshot(
        collection(firestore, "netflixUsers", session?.user?.uid, "likeMovie"),
        (snapshot) => setLikes(snapshot.docs)
      ),
    [firestore, session?.user?.uid]
  );

  useEffect(
    () =>
      setHasLikes(
        likes.findIndex((like) => like.id === movieDetails?.id.toString()!) !==
          -1
      ),
    [likes]
  );

  const likeMovie = async () => {
    try {
      if (hasLikes) {
        await deleteDoc(
          doc(
            firestore,
            "netflixUsers",
            session?.user?.uid,
            "likeMovie",
            movieDetails?.id.toString()
          )
        );
      } else {
        const userRef = doc(
          firestore,
          "netflixUsers",
          session?.user?.uid,
          "likeMovie",
          movieDetails?.id.toString()
        );
        setDoc(userRef, JSON.parse(JSON.stringify(movieDetails)));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-start px-8 bg-transparent items-center h-[100px] w-[550px] pb-0 rounded-lg shadow-xl z-[99] pt-4">
      <div className="flex justify-between items-center text-center">
        <button className="px-4 items-center text-center">
          {hasLikes ? (
            <BsFillBookmarkDashFill className="h-8 w-8 text-red-500" />
          ) : (
            <BsFillBookmarkCheckFill className="h-8 w-8 text-green-500" />
          )}
        </button>
        <div className="w-[250px]">
          <p className="text-xl font-medium">
            {hasLikes ? "Remove Your Favourite" : "Add Your Favourite"}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center text-center">
        {hasLikes ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-24 cursor-pointer px-2.5 py-2.5 bg-gray-900 rounded-full items-center hover:bg-red-300"
            onClick={() => likeMovie()}
          >
            <IoIosRemoveCircle className="h-6 w-6 text-red-500" />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-24 cursor-pointer px-2.5 py-2.5 bg-gray-900 rounded-full items-center hover:bg-green-300"
            onClick={() => likeMovie()}
          >
            <IoIosAddCircle className="h-6 w-6 text-green-500" />
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default AddBookmark;

/*           id: movieDetails.id,
          title: movieDetails.title,
          backdrop_path: movieDetails.backdrop_path,
          media_type: type,
          release_date: movieDetails.release_date,
          original_language: movieDetails.original_language,
          original_name: movieDetails.original_title,
          overview: movieDetails.overview,
          popularity: movieDetails.popularity,
          poster_path: movieDetails.poster_path,
          vote_average: movieDetails.vote_average,
          vote_count: movieDetails.vote_count,
          timeStamp: Date.now().toLocaleString(), */

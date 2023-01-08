import {
  onSnapshot,
  collection,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import {
  BsFillBookmarkDashFill,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";
import { IoIosRemoveCircle, IoIosAddCircle } from "react-icons/io";

import { firestore } from "../firebase/firebase";

type Props = {
  castPerson: any;
};

function PersonBookMark({ castPerson }: Props) {
  const [hasLikes, setHasLikes] = useState(false);
  const { data: session }: any = useSession();
  const [likes, setLikes] = useState<any[]>([]);

  useEffect(
    () =>
      onSnapshot(
        collection(
          firestore,
          "netflixUsers",
          session?.user?.uid,
          "likeActress"
        ),
        (snapshot) => setLikes(snapshot.docs)
      ),
    [firestore, session?.user?.uid]
  );

  useEffect(
    () =>
      setHasLikes(
        likes.findIndex((like) => like.id === castPerson?.id.toString()!) !== -1
      ),
    [likes, castPerson]
  );

  const likeMovie = async () => {
    try {
      if (hasLikes) {
        await deleteDoc(
          doc(
            firestore,
            "netflixUsers",
            session?.user?.uid,
            "likeActress",
            castPerson?.id.toString()
          )
        );
      } else {
        const userRef = doc(
          firestore,
          "netflixUsers",
          session?.user?.uid,
          "likeActress",
          castPerson?.id.toString()
        );
        setDoc(userRef, JSON.parse(JSON.stringify(castPerson)));
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

export default PersonBookMark;

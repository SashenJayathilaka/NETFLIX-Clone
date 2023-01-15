import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { PopularTyping } from "../typings";

type Props = {
  person: PopularTyping;
  baseUrl: string;
};

function LikeActress({ person, baseUrl }: Props) {
  const router = useRouter();

  const handleNavigatePage = () => {
    router.push({
      pathname: `${process.env.NEXT_PUBLIC_AUTH_URL}/cast/${person.id}`,
      query: {
        castId: person.id.toString(),
      },
    });
  };
  return (
    <motion.div
      className="bg-transparent relative cursor-pointer items-center px-2 py-2 rounded-md shadow-2xl hover:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onClick={handleNavigatePage}
    >
      <img
        src={`${baseUrl}${person.profile_path}`}
        alt=""
        className="w-48 m-auto"
      />
      <h1 className="text-gray-300 font-bold text-lg text-center py-2 line-clamp-3">
        {person.name}
      </h1>
      <div className="text-white px-2.5 py-2.5 text-sm flex justify-between">
        <p>{person.known_for_department}</p>|
        <p>popularity: {person.popularity}</p>
      </div>
    </motion.div>
  );
}

export default LikeActress;

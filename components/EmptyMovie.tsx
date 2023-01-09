import React from "react";

type Props = {};

function EmptyMovie({}: Props) {
  return (
    <div className="flex justify-center h-36 text-center items-center overflow-hidden">
      <p className="text-4xl font-bold animate-bounce text-gray-400">
        Your Collection is Empty
      </p>
    </div>
  );
}

export default EmptyMovie;

import React from "react";

type Props = {};

function BannerDetailsSkeleton({}: Props) {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
    >
      <div className="w-[500px]">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default BannerDetailsSkeleton;

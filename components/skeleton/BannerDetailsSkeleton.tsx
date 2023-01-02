import React from "react";

type Props = {};

function BannerDetailsSkeleton({}: Props) {
  return (
    <div
      role="status"
      className="animate-pulse space-y-4 max-w-3xl overflow-hidden pt-24"
    >
      <div className="mb-12 w-screen">
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-[300px] mb-4"></div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[260px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[580px]"></div>
      <br />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default BannerDetailsSkeleton;

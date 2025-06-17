"use client";

import { popularities } from "@/constants/popularity";

import DisplayCard from "./DisplayCard";

import { NextPage } from "next";

const Popularity: NextPage = ({}) => {
  return (
    <div className="relative mt-96">
      {/* Background section */}
      <div className="absolute left-0 top-[-15em]  w-full h-full flex items-center justify-center ">
        <div>
          <p className="text-5xl mt-20 mb-24 font-semibold text-center text-secondary-gradient">
            Popular
          </p>

          <div className="w-full flex items-center gap-x-10 max-w-7xl">
            {popularities.map((plugin, index) => (
              <DisplayCard key={index} {...plugin} popularTab />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-zinc-900/50 w-full h-[28rem]" />
    </div>
  );
};

export default Popularity;

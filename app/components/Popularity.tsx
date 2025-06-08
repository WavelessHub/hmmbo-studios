"use client";

import { popularities } from "@/app/constants/popularity";

import DisplayCard from "./DisplayCard";

import { NextPage } from "next";

interface Props {}

const Popularity: NextPage<Props> = ({}) => {
  return (
    <div className="relative mt-96">
      {/* Background section */}
      <div className="absolute left-0 top-[-15em]  w-full h-full flex items-center justify-center ">
        <div>
          <p className="text-5xl m-20 mb-24 font-semibold text-center text-secondary-gradient">
            Popular
          </p>

          <div className="w-full flex items-center gap-x-10 max-w-7xl">
            {popularities.map((plugin, index) => (
              <DisplayCard key={index} {...plugin} popularTab />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1A1919] w-[98.5vw] h-[28rem]" />
    </div>
  );
};

export default Popularity;

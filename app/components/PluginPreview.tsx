"use client";

import Image from "next/image";

import leftChar from "@/app/images/leftcharacter.png";
import rightChar from "@/app/images/rightcharacter.png";

import Featured from "./Featured";

import { Figtree } from "next/font/google";
import { NextPage } from "next";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["800", "600", "500"],
  variable: "--font-figtree",
  display: "swap",
});

const PluginPreview: NextPage = ({}) => {
  return (
    <section className="w-full">
      {/* Title above the flex container */}
      <div className="mb-[-8em] text-center">
        <p
          className={`${figtree.className} font-bold text-4xl md:text-7xl bg-gradient-to-r from-[#20B478] to-[#58B83A] bg-clip-text text-transparent`}
        >
          Plugins, configs & <br /> much more
        </p>
      </div>

      {/* Flex container with left image, description, right image */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-28 h-auto md:w-96 mb-[-10px]">
          <Image src={leftChar} alt="Left Character" />
        </div>

        <div className="flex flex-col gap-8 items-center justify-center md:text-left md:flex-1 mt-28">
          <p
            className={`${figtree.className} w-[80%] font-light text-gray-300 text-sm text-center md:text-base scale-125`}
          >
            More customization is key. Build your unique server with the right
            tools. Customize everything from performance to features, so your
            server grows with your needs.
          </p>

          <button className="self-center font-medium w-40 py-4 bg-primary hover:bg-primary/70 cursor-pointer rounded active:scale-95 transition-all">
            {" "}
            Explore Plugins
          </button>
        </div>

        <div className="w-28 h-auto md:w-96">
          <Image src={rightChar} alt="Right Character" />
        </div>
      </div>

      <div className="relative">
        {/* Background section */}
        <div className="bg-[#1A1919] h-[30rem]"></div>

        {/* Carousel overlayed on top */}
        <div className="absolute top-24 left-0 w-full h-full flex items-center justify-center">
          <Featured />
        </div>
      </div>
    </section>
  );
};

export default PluginPreview;

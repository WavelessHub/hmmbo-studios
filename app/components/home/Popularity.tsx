"use client";

import { popularities } from "@/constants/popularity";

import DisplayCard from "./DisplayCard";

import { NextPage } from "next";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


const Popularity: NextPage = ({}) => {

    const [sliderRef] = useKeenSlider({
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 3,
        spacing: 15,
  
      },
      
    });

  return (
    <div className="relative mt-96 pt-20 ">
      {/* Background section */}
      <div className="absolute left-0 top-[-15em] w-full h-full flex items-center justify-center ">
        <div>
          <p className="text-5xl mt-20  h-20 font-semibold text-center text-secondary-gradient">
          Hot Right Now  
          </p>
      <div className="w-[80vw]">
          <div
        ref={sliderRef}
        className="keen-slider "
        
      >
            {popularities.map((plugin, index) => (
               <div className="keen-slider__slide" key={index}>
              <DisplayCard  {...plugin} popularTab />
              </div>

            ))}
          </div>
        </div>
      </div>
      </div>
      <div className="bg-[#1A1919] w-full h-[24rem]" />
    </div>
  );
};

export default Popularity;
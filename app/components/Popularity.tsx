"use client";

import { popularities } from "@/constants/popularity";

import DisplayCard from "./DisplayCard";

import { motion } from "motion/react";

import { NextPage } from "next";

const Popularity: NextPage = ({}) => {
  return (
    <div className="relative mt-96">
      {/* Background section */}
      <div className="absolute left-0 top-[-15em]  w-full h-full flex items-center justify-center ">
        <div>
          <motion.section
            viewport={{ once: true }}
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, type: "tween" }}
          >
            <p className="text-5xl mt-20 mb-24 font-semibold text-center text-secondary-gradient">
              Popular
            </p>
          </motion.section>

          <div className="w-full flex items-center gap-x-10 max-w-7xl">
            {popularities.map((plugin, index) => (
              <motion.section
                key={index}
                viewport={{ once: true }}
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, delay: index * 0.2, type: "tween" }}
              >
                <DisplayCard {...plugin} popularTab />
              </motion.section>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1A1919] w-full h-[28rem]" />
    </div>
  );
};

export default Popularity;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import img1 from "@/images/Plugins.png";
import img2 from "@/images/Config.png";
import img3 from "@/images/Build.png";
import img4 from "@/images/Misc.png";

import { motion } from "motion/react";

import { NextPage } from "next";

const Category: NextPage = ({}) => {
  const items = [
    { name: "Adventure", image: img1 },
    { name: "Survival", image: img2 },
    { name: "Creative", image: img3 },
    { name: "Minigames", image: img4 },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="mt-12 flex flex-col max-w-7xl">
        <motion.section
          viewport={{ once: true }}
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, type: "tween" }}
        >
          <p className="text-5xl m-20 pb-2 font-semibold text-center text-secondary-gradient">
            Browse By Category
          </p>
        </motion.section>

        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-8 justify-start">
          {items.map((item, index) => (
            <motion.section
              key={index}
              viewport={{ once: true }}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: index * 0.2, type: "tween" }}
            >
              <Link
                href={`/projects/category/${encodeURIComponent(
                  item.name.toLowerCase().replace(/\s+/g, "-")
                )}`}
                className="overflow-hidden shadow-md block group transition-transform hover:scale-105"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full rounded-lg overflow-hidden h-64 object-cover group-hover:brightness-75 transition-all duration-300"
                />
              </Link>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

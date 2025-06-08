"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import img1 from "@/app/images/Plugins.png";
import img2 from "@/app/images/Config.png";
import img3 from "@/app/images/Build.png";
import img4 from "@/app/images/Misc.png";

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
        <p className="text-5xl m-20 pb-2 font-semibold text-center text-secondary-gradient">
          Browse By Category
        </p>

        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-8 justify-start">
          {items.map((item, index) => (
            <Link
              key={index}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

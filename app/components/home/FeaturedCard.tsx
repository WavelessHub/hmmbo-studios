'use client';

import React from "react";
import { ArrowRight } from "lucide-react";
import { NextPage } from "next";
import { ItemData } from "@/constants/plugins";



const FeaturedCard: NextPage<ItemData> = ({
  bgImage,
  title,
  description,
  price,
  originalPrice = null,
  onBuy,
  badge = null,
}) => {
  return (
    <div className="group relative w-[23rem] h-[30rem] rounded-xl overflow-hidden border border-white/10 bg-black shadow-md hover:shadow-2xl transition-shadow duration-300">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />

      {/* Badge */}
      {badge && (
        <div className="relative left-4 top-16 rounded-sm -translate-y-1/2 -rotate-90 origin-top-left bg-red-500 text-white text-[11px] font-semibold px-3 py-1 rounded-tr-md rounded-br-md shadow-lg">
          {badge}
        </div>
      )}

      {/* Text Content */}
      <div className="absolute bottom-0 p-4 w-full text-white space-y-2">
        <h2 className="text-lg font-semibold leading-tight">{title}</h2>
        <p className="text-sm opacity-90 leading-snug">{description}</p>

        {/* Pricing + Button */}
        <div className="flex items-center justify-between pt-3">
          <div>
            {originalPrice && (
              <div className="text-sm line-through text-gray-400">
                €{originalPrice.toFixed(2)}
              </div>
            )}
            <div className="text-2xl font-bold text-white">€{price.toFixed(2)}</div>
          </div>

          <button
            onClick={onBuy}
            className="bg-primary hover:bg-primary/70 text-black rounded-full p-2 transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
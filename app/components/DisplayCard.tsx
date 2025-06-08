import { ItemData } from "@/app/constants/plugins";

import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { NextPage } from "next";

import Image from "next/image";

interface Props extends ItemData {
  popularTab?: boolean;
}

const DisplayCard: NextPage<Props> = ({
  title,
  description,
  price,
  originalPrice,
  bgImage,
  onBuy,
  popularTab,
  badge,
}) => {
  return (
    <Card className="group relative w-[20rem] h-[30rem] py-0 rounded-lg overflow-hidden border border-white/10 bg-black shadow-md hover:shadow-2xl transition-shadow duration-300">
      <CardContent className="flex flex-col justify-between h-full p-0">
        {/* Image container with overflow-hidden */}
        <div className="relative w-full h-2/3 overflow-hidden">
          <Image
            alt={title}
            src={bgImage}
            width={512}
            height={512}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          {badge && (
            <div className="absolute top-0 left-0">
              <p className="font-semibold text-white text-xs px-6 rounded-br-sm translate-y-1/2 -rotate-90 bg-red-500 p-2 text-center rounded-lg">
                {badge}
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-4">
          <CardTitle className="text-white text-lg font-semibold leading-tight mb-2">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-white/90 leading-snug flex-grow">
            {description}
          </CardDescription>
        </div>

        {/* Footer */}
        <CardFooter className="flex items-end justify-between p-4 border-t border-white/10">
          <div>
            <div
              className={`text-sm line-through text-gray-400 ${
                !originalPrice && "text-transparent"
              }`}
            >
              €{originalPrice?.toFixed(2) || 0}
            </div>

            <div className="text-2xl font-bold text-white">
              €{price.toFixed(2)}
            </div>
          </div>

          {popularTab ? (
            <button className="bg-primary text-white font-semibold cursor-pointer hover:text-black px-3 py-2 rounded text-xs hover:bg-gray-200 transition">
              ADD TO CART
            </button>
          ) : (
            <button
              onClick={onBuy}
              className="bg-primary hover:bg-primary/70 cursor-pointer text-white rounded-full p-2 transition"
            >
              <ArrowRight className="text-primary-foreground" size={18} />
            </button>
          )}
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default DisplayCard;

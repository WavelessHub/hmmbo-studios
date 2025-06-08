"use client";

import { Project } from "@/app/constants/projects";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import Image from "next/image";

import { NextPage } from "next";

const ProjectCard: NextPage<Project> = ({
  title,
  description,
  price,
  image_url,
  onBuy,
}) => {
  return (
    <Card className="group relative w-[25rem] h-[35rem] py-0 rounded-lg overflow-hidden border border-white/10 bg-black shadow-md hover:shadow-2xl transition-shadow duration-300">
      <CardContent className="flex flex-col justify-between h-full p-0">
        {/* Image container with overflow-hidden */}
        <div className="relative w-full h-2/3 overflow-hidden">
          <Image
            alt={title}
            src={image_url}
            width={512}
            height={512}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
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
            <div className="text-2xl font-bold text-white">
              {price === 0 ? "FREE" : `€${price}`}
            </div>
          </div>

          <Button
            onClick={onBuy}
            className="bg-primary text-white font-semibold cursor-pointer hover:text-black px-3 py-2 rounded text-xs hover:bg-gray-200 transition"
          >
            ADD TO CART
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

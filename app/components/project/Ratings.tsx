import { type Rating } from "@/constants/projects";

import { Star } from "lucide-react";

import { NextPage } from "next";

interface Props {
  size?: number;
  rating: Rating;
}

const Ratings: NextPage<Props> = ({ rating, size = 20 }) => {
  const numericRating = parseFloat(rating);

  const stars = Array.from({ length: 5 }, (_, i) => {
    const starIndex = i + 1;

    if (numericRating >= starIndex) return "full";
    else if (numericRating >= starIndex - 0.5) return "half";
    else return "empty";
  });

  return (
    <div className="flex items-center gap-x-0.5">
      {stars.map((star, index) => (
        <div key={index} className={`relative w-[${size}px] h-[${size}px]`}>
          {/* Background: gray star for all */}
          <Star size={20} className="fill-gray-500 text-gray-500" />

          {/* Overlay: yellow for full and half stars */}
          {star !== "empty" && (
            <div
              className={`absolute top-0 left-0 h-[22px] overflow-hidden w-[${size}px]`}
            >
              <Star size={20} className="fill-yellow-500 text-yellow-500" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Ratings;

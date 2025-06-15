import { Project, Rating } from "@/constants/projects";

import { Separator } from "@/components/ui/separator";

import { NextPage } from "next";

import Comment from "./Comment";
import Ratings from "./Ratings";

interface Props {
  comments: Project["comments"];
}

const Reviews: NextPage<Props> = ({ comments }) => {
  const ratingBuckets: Record<number, number> = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  let totalRating = 0;

  comments.forEach((comment) => {
    const numeric = Math.round(parseFloat(comment.rating));
    if (numeric >= 1 && numeric <= 5) {
      ratingBuckets[numeric as keyof typeof ratingBuckets]++;
    }

    totalRating += parseFloat(comment.rating);
  });

  const totalComments = comments.length;
  const averageRating = (totalRating / totalComments).toFixed(1);

  const getPercentage = (count: number) =>
    totalComments > 0 ? (count / totalComments) * 100 : 0;

  return (
    <div className="w-full h-full flex flex-col gap-y-10 p-10">
      <div className="w-full h-full flex items-center gap-x-20 px-10">
        <div className="flex flex-col gap-y-2 items-center">
          <p className="text-6xl font-bold">{averageRating}</p>

          <Ratings rating={averageRating as Rating} />

          <p className="font-medium text-base text-gray-400">
            {totalComments.toLocaleString()} ratings
          </p>
        </div>

        <div className="w-full h-full flex flex-col gap-y-4">
          {[5, 4, 3, 2, 1].map((star) => {
            const percentage = getPercentage(ratingBuckets[star]);

            return (
              <div key={star} className="w-full flex items-center gap-x-4">
                <div className="relative w-full h-4">
                  <div className="w-full h-4 bg-gray-500 rounded-full" />
                  <div
                    className="absolute top-0 left-0 h-4 overflow-hidden"
                    style={{ width: `${percentage}%` }}
                  >
                    <div className="w-full h-4 bg-primary rounded-full" />
                  </div>
                </div>
                <p className="font-medium text-base text-gray-400">{star}.0</p>
              </div>
            );
          })}
        </div>
      </div>

      <Separator className="bg-zinc-800 h-0.5 rounded-full" />

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

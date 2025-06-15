import { type Comment } from "@/constants/projects";

import { ThumbsDown, ThumbsUp } from "lucide-react";

import { useState } from "react";
import { NextPage } from "next";

import Ratings from "./Ratings";

import Image from "next/image";
import Vote from "./Vote";

const Comment: NextPage<Comment> = ({
  profileImage,
  username,
  comment,
  rating,
}) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setHasLiked(false);
    } else {
      setHasLiked(true);
      setHasDisliked(false); // remove dislike if present
    }
  };

  const handleDislike = () => {
    if (hasDisliked) {
      setHasDisliked(false);
    } else {
      setHasDisliked(true);
      setHasLiked(false); // remove like if present
    }
  };

  return (
    <div className="w-full flex gap-4 items-start">
      <Image
        src={profileImage}
        alt="pfp"
        width={512}
        height={512}
        className="w-12 h-12 rounded-full bg-cover bg-center"
      />

      <div className="bg-zinc-900 p-4 px-5 flex flex-col gap-y-1 rounded-lg w-full">
        <div className="w-full flex items-center justify-between">
          <p className="text-lg font-bold text-white">{username}</p>

          <Ratings rating={rating} />
        </div>

        <div className="w-full flex items-center justify-between">
          <p className="text-gray-400 font-medium text-sm">{comment}</p>

          <div className="flex items-center gap-x-2">
            <Vote
              isActive={hasLiked}
              onClick={handleLike}
              color="green"
              Icon={ThumbsUp}
            />

            <Vote
              isActive={hasDisliked}
              onClick={handleDislike}
              color="red"
              Icon={ThumbsDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

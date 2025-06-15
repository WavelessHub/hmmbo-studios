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
  return (
    <div className="w-full flex gap-4 items-start">
      <Image
        src={profileImage}
        alt="pfp"
        width={512}
        height={512}
        className="w-12 h-12 rounded-full bg-cover bg-center"
      />

      <div className="bg-zinc-900 p-3.5 px-5 flex flex-col gap-y-1 rounded-lg w-full">
        <div className="w-full flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-lg font-bold text-white">{username}</p>
            <p className="text-gray-400 font-medium text-sm">{comment}</p>
          </div>

          <Ratings rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default Comment;

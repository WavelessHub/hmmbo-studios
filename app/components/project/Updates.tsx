"use client";

import { Separator } from "@/components/ui/separator";

import { Update } from "@/constants/projects";

import { NextPage } from "next";

import Image from "next/image";

interface Props {
  updates: Update[];
}

const Updates: NextPage<Props> = ({ updates }) => {
  return (
    <div className="w-full h-full p-6 pl-0">
      <div className="space-y-6">
        {updates.map((update, index) => (
          <div key={index} className="bg-zinc-900/60 px-10 py-8 rounded-xl">
            <p className="text-3xl font-bold mb-8">{update.title}</p>

            <div className="mb-8">
              {update.description.map((description, index) => (
                <p key={index} className="text-lg font-medium text-gray-400">
                  - {description}
                </p>
              ))}
            </div>

            {update.acknowledgement && (
              <div className="flex items-center gap-x-2 mb-8">
                <p className="text-lg font-medium">{update.acknowledgement}</p>
              </div>
            )}

            <p className="text-lg font-bold">FULL CHANGELOG:</p>

            {update.githubLink && (
              <p className="text-blue-400 hover:underline cursor-pointer mb-4">
                {update.githubLink}
              </p>
            )}

            <div className="flex items-center gap-x-3 mt-4">
              <Image
                src={update.author.avatarUrl}
                alt="pfp"
                width={512}
                height={512}
                className="w-8 h-8 rounded-full bg-cover bg-center"
              />

              <p className="text-[15px] font-medium text-gray-400">
                {update.author.username},{" "}
                {update.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;

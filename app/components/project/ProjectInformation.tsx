import { Project } from "@/constants/projects";

import { Info } from "lucide-react";

import { NextPage } from "next";

import Ratings from "./Ratings";

const ProjectInformation: NextPage<Project["projectInfo"]> = ({
  author,
  firstRelease,
  lastUpdate,
  rating,
  status,
  totalDownloads,
  totalRatings,
}) => {
  return (
    <div>
      <div className="bg-primary p-5 w-full rounded-none flex items-center gap-x-4">
        <Info className="font-bold" />
        <p className="font-bold">Information</p>
      </div>

      <div className="flex flex-col items-between gap-y-2 w-full bg-slate-200 text-sm font-medium text-gray-600 p-4">
        <div className="flex items-center justify-between">
          <p>Author:</p>
          <p>{author}</p>
        </div>

        <div className="flex items-center justify-between">
          <p>Total Downloads:</p>
          <p>{totalDownloads}</p>
        </div>

        <div className="flex items-center justify-between">
          <p>First Release:</p>
          <p>{getDate(firstRelease)}</p>
        </div>

        <div className="flex items-center justify-between">
          <p>Last Update:</p>
          <p>{getDate(lastUpdate)}</p>
        </div>

        <div className="flex items-center justify-between">
          <p>Category:</p>
          <p>{status}</p>
        </div>

        <div className="flex items-center justify-between">
          <p>All-Time Rating:</p>

          <Ratings rating={rating} />
        </div>

        <div className="flex items-center justify-end">
          <p>
            {totalRatings} {totalRatings === 1 ? "rating" : "ratings"}
          </p>
        </div>
      </div>
    </div>
  );
};

const getDate = (date: Date): string => {
  const currentDate = new Date();

  return date.toDateString() === currentDate.toDateString()
    ? "Today"
    : date.getDate() + 1 === currentDate.getDate()
    ? "Yesterday"
    : date.toDateString();
};

export default ProjectInformation;

import { Project } from "@/constants/projects";

import CommentForm from "./CommentForm";
import Comment from "./Comment";

import { NextPage } from "next";

interface Props {
  id: Project["id"];
  comments: Project["comments"];
}

const Overview: NextPage<Props> = ({ id, comments }) => {
  return (
    <>
      <div className="w-full h-full aspect-video bg-slate-200 flex items-center justify-center">
        <p className="text-7xl font-bold text-black">BB CODE</p>
      </div>

      <div className="flex flex-col gap-y-6 w-full mt-6">
        <CommentForm id={id} />

        <div className="space-y-4">
          {comments.map((comment, index) => (
            <Comment key={index} {...comment} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Overview;

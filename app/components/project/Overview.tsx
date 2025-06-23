import { Project } from "@/constants/projects";

import CommentForm from "./CommentForm";
import Comment from "./Comment";

import { NextPage } from "next";
import BBCodeEditor from "./BBCodeEditor";

interface Props {
  id: Project["id"];
  comments: Project["comments"];
  description: Project["description"];
}

const Overview: NextPage<Props> = ({ id, comments, description }) => {
  return (
    <>
      <div className="w-full h-full bg-slate-50 p-4 text-black">
        {/* <p className="text-7xl font-bold text-black">BB CODE</p> */}
        <BBCodeEditor bbcode={description}/>
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

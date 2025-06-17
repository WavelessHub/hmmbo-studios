import { NotebookText } from "lucide-react";
import { NextPage } from "next";

const BlogTitle: NextPage = ({}) => {
  return (
    <div className="text-center mb-16 pt-8">
      <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
        <NotebookText className="w-8 h-8 text-primary" />
      </div>
      <h1 className="text-5xl pb-2 lg:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
        HMMBO Studios Blog
      </h1>
      <p className="text-xl text-gray-500 font-medium">
        Latest news, tutorials, and insights from the world of Minecraft
        plugins.
      </p>
    </div>
  );
};

export default BlogTitle;

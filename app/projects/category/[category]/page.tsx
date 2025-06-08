"use client";

import ProjectCard from "@/app/components/ProjectCard";

import { projects } from "@/app/constants/projects";
import { NextPage } from "next";

import Link from "next/link";
import { useParams } from "next/navigation";

const Page: NextPage = ({}) => {
  const { category }: { category: string } = useParams();

  const filteredProjects = projects.filter(
    (project) => project.category.toLowerCase() === category
  );

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 py-8 mb-32">
      <div className="flex flex-col mt-16 mx-12">
        <p className="text-5xl mb-32 pb-2 font-semibold text-center text-secondary-gradient">
          CATEGORY: {category.toUpperCase()}
        </p>
      </div>

      {filteredProjects.length === 0 ? (
        <p className="col-span-full text-center text-gray-500 text-lg font-medium">
          No content found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
          {filteredProjects.map((project, index) => (
            <Link href={`/projects/${index}`} key={index}>
              <ProjectCard {...project} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;

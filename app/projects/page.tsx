"use client";

import ProjectCard from "@/app/components/ProjectCard";

import { NextPage } from "next";

import Link from "next/link";
import { projects } from "../constants/projects";

const ProjectsPage: NextPage = ({}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-8 mb-32">
      <div className="flex flex-col mt-16 mx-12">
        <p className="text-5xl mb-20 pb-2 font-semibold text-center text-secondary-gradient">
          ALL PROJECTS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
        {projects.map((project, index) => (
          <Link href={`/projects/${index}`} key={index}>
            <ProjectCard {...project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

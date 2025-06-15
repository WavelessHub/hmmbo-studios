"use client";

import ProjectCard from "@/app/components/project/ProjectCard";
import Category from "@/app/components/home/Category";

import { projects } from "@/constants/projects";

import { NextPage } from "next";

import Link from "next/link";

const ProjectsPage: NextPage = ({}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 mb-20">
      <Category />

      <div className="flex flex-col mt-16 mx-12">
        <p className="text-5xl mb-20 pb-2 font-semibold text-center text-secondary-gradient">
          ALL PROJECTS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}?tab=overview`} key={project.id}>
            <ProjectCard {...project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

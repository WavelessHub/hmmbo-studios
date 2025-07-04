"use client";

import ProjectInfo from "@/app/components/project/ProjectInfo";
import ProjectInformation from "@/app/components/project/ProjectInformation";
import Tabs from "@/app/components/project/Tabs";

import { Project, projects } from "@/constants/projects";

import { Button } from "@/components/ui/button";

import { ReactNode } from "react";
import { NextPage } from "next";
import Link from "next/link";

interface Props {
  params: { id: string };
  children: ReactNode;
}

const ProjectLayout: NextPage<Props> = ({ params: { id }, children }) => {
  const { projectInfo, discordLink, donationLink }: Project = projects.filter(
    (project) => project.id === id
  )[0];

  return (
    <div className="mt-32 w-full h-full px-20">
      <ProjectInfo id={id} />

      <div className="flex items-start gap-x-2">
        <div className="flex-[4] flex flex-col gap-y-1">
          <Tabs />

          {children}
        </div>

        <div className="flex-[1] flex flex-col gap-y-2 w-full h-full">
          <ProjectInformation {...projectInfo} />

          <Link href={discordLink} target="_blank">
            <Button className="font-bold text-base py-8 w-full rounded-none">
              DISCORD
            </Button>
          </Link>

          <Link href={donationLink} target="_blank">
            <Button className="font-bold text-base py-8 w-full rounded-none">
              DONATION
            </Button>
          </Link>

          <div className="w-full py-10 bg-slate-200 flex items-center justify-center">
            <p className="text-black font-medium text-2xl">ADVERTISEMENT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;

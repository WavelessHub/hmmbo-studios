import { Project, projects } from "@/constants/projects";

import { Button } from "@/components/ui/button";

import { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
}

const ProjectInfo: NextPage<Props> = ({ id }) => {
  const project: Project = projects.filter((project) => project.id === id)[0];

  const latestBuild = project.versions
    .flatMap((version) => version.builds)
    .reduce((latest, build) => {
      return build.releaseDate > latest.releaseDate ? build : latest;
    });

  return (
    <div className="flex items-center justify-between mb-20">
      <div className="flex items-center gap-x-6">
        <Image
          src={project.image_url}
          alt="image"
          width={512}
          height={512}
          className="w-28 h-28 rounded-3xl bg-cover bg-center"
        />

        <div>
          <p className="font-bold text-5xl mb-2">{project.title}</p>
          <p className="font-medium text-base text-gray-400">
            {project.slogan}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-2">
        <Link href={latestBuild.downloadLink} target="_blank">
          <Button className="font-bold p-8 py-6 active:scale-95 transition-all duration-100">
            DOWNLOAD
          </Button>
        </Link>

        <p className="font-medium text-base text-gray-400">
          {latestBuild.buildId}
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;

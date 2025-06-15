import { Download, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { NextPage } from "next";
import { Version } from "@/constants/projects";
import Link from "next/link";

interface Props {
  versions: Version[];
}

const Versions: NextPage<Props> = ({ versions }) => {
  return (
    <div className="w-full h-full p-10 space-y-8">
      {versions.map((version, index) => (
        <div key={index} className="flex flex-col gap-y-4">
          <p className="text-6xl font-bold">{version.mcVersion}</p>

          {version.builds
            .sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())
            .map((build, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-4 px-5 flex flex-col gap-y-1 rounded-lg w-full"
              >
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-x-4">
                    <p className="text-lg font-bold text-white">
                      {build.buildId}
                    </p>

                    {build.isNew && (
                      <Badge className="bg-secondary-gradient text-medium">
                        NEW
                      </Badge>
                    )}

                    {build.isDeprecated && (
                      <Badge className="bg-red-500 text-medium">
                        DEPRECATED
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-x-6">
                    <Badge className="text-medium">
                      {build.projectVersion}
                    </Badge>

                    <Link href={build.downloadLink} target="_blank">
                      <Download className="text-gray-400 hover:text-white cursor-pointer" />
                    </Link>

                    <Link href={build.githubLink} target="_blank">
                      <Github className="text-gray-400 hover:text-white cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Versions;

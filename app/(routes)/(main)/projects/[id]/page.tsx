"use client";

import Overview from "@/app/components/project/Overview";
import Versions from "@/app/components/project/Versions";
import Reviews from "@/app/components/project/Reviews";
import Updates from "@/app/components/project/Updates";

import { Project, projects } from "@/constants/projects";

import { usePath } from "@/hooks/usePath";

import { NextPage } from "next";

interface Props {
  params: { id: string };
}

const ProjectPage: NextPage<Props> = ({ params: { id } }) => {
  const { params, redirect } = usePath();

  const { comments, versions, updates }: Project = projects.filter(
    (project) => project.id === id
  )[0];

  switch (params.get("tab")) {
    case "overview":
      return <Overview id={id} comments={comments} />;

    case "wiki":
      return redirect("https://wiki.hmmbo.com");

    case "updates":
      return <Updates updates={updates} />;

    case "version":
      return <Versions versions={versions} />;

    case "reviews":
      return <Reviews comments={comments} />;

    default:
      return redirect("?tab=overview");
  }
};

export default ProjectPage;

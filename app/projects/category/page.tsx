import { redirect } from "next/navigation";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return redirect("/projects");
};

export default Page;

import Footer from "@/app/components/Footer";

import { PropsWithChildren } from "react";
import { NextPage } from "next";

const ProjectLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 flex justify-center w-full">{children}</main>

      <Footer />
    </div>
  );
};

export default ProjectLayout;

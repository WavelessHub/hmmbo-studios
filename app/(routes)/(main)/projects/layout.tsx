import Category from "@/app/components/Category";
import Footer from "@/app/components/Footer";

import { PropsWithChildren } from "react";
import { NextPage } from "next";

const ProjectLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Category />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default ProjectLayout;

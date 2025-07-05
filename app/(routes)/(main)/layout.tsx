import Navbar from "@/app/components/Navbar";

import { PropsWithChildren } from "react";
import { NextPage } from "next";

const MainLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default MainLayout;

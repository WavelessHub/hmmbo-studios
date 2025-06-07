import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import PluginPreview from "@/app/components/PluginPreview";
import Footer from "@/app/components/Footer";

import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <Navbar />
      <Hero />
      <PluginPreview />

      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
};

export default Page;

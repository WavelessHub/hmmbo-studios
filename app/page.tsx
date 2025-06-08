import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import PluginPreview from "@/app/components/PluginPreview";
import Footer from "@/app/components/Footer";
import Category from "@/app/components/Category";
import Popularity from "@/app/components/Popularity";
import Reviews from "@/app/components/Reviews";
import Supporters from "@/app/components/Supporters";

import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <Navbar />
      <Hero />
      <PluginPreview />

      <div className="mt-40" />
      <Category />
      <Popularity />
      <Reviews />
      <Supporters />

      <Footer />
    </>
  );
};

export default Page;

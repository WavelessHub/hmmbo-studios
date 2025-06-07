import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import PluginPreview from "@/app/components/PluginPreview";
import Footer from "@/app/components/Footer";

import { NextPage } from "next";

import Category from "./components/Category";
import Popularity from "./components/Popularity";
import Reviews from "./components/Reviews";
import Supporters from "./components/Supporters";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <Navbar />
      <Hero />
      <PluginPreview />

      <div className="mt-32" />
      <Category />
      <Popularity />
      <Reviews />
      <Supporters />

      <Footer />
    </>
  );
};

export default Page;

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/home/Hero";
import PluginPreview from "@/app/components/home/PluginPreview";
import Footer from "@/app/components/Footer";
import Category from "@/app/components/home/Category";
import Popularity from "@/app/components/home/Popularity";
import Reviews from "@/app/components/home/Reviews";
import Supporters from "@/app/components/home/Supporters";
import ScrollUpButton from "@/app/components/home/ScrollUpButton";

import { NextPage } from "next";

const Page: NextPage = ({}) => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <PluginPreview />

      <div className="mt-40">
        <Category />
        <Popularity />
        <Reviews />
        <Supporters />
      </div>

      <ScrollUpButton />

      <Footer />
    </div>
  );
};

export default Page;

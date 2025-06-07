import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";

import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Page;

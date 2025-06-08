import { NextPage } from "next";

import Image from "next/image";
import hmmbo from "../images/hmmbo.png";

const Hero: NextPage = ({}) => {
  return (
    <div className="flex min-h-screen items-center justify-center text-right select-none">
      <p className="mt-32 font-extrabold text-[6rem] md:text-[11rem] leading-[80px] md:leading-[130px] items-end tracking-[-0.55rem] md:tracking-[-0.65rem] bg-gradient-to-r from-[#20B478] to-[#58B83A] bg-clip-text text-transparent text-center">
        HMMBO
        <br />
        <span className="text-[#5277db]">STUDIOS</span>
      </p>

      <Image
        src={hmmbo}
        alt="HMMBO Studios Logo"
        width={200}
        height={200}
        className="-ml-8 mt-4 hidden sm:block align-baseline" // ✅ Adjusted for baseline alignment
      />
    </div>
  );
};

export default Hero;



import { NextPage } from "next";
import Image from "next/image";
import hmmbo from "@/images/hmmbo.png";

/**
 * Background image lives in a *separate absolutely-positioned layer*,
 * so only the image is transparent – not the text/logo.
 */
const Hero: NextPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center select-none">
      
      <p className="mt-32 text-center font-extrabold text-[6rem] leading-[80px] tracking-[-0.55rem] text-transparent bg-gradient-to-r from-[#20B478] to-[#58B83A] bg-clip-text md:text-[11rem] md:leading-[130px] md:tracking-[-0.65rem]">
        HMMBO
        <br />
        <span className="text-[#5277db]">STUDIOS</span>
      </p>

      {/* <Image
        src={hmmbo}s
        alt="HMMBO Studios Logo"
        width={200}
        height={200}
        className="-ml-8 mt-4 hidden align-baseline sm:block"
        priority
      /> */}
    </div>
  );
};

export default Hero;

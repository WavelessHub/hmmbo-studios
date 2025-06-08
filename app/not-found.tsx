import { NextPage } from "next";
import Image from "next/image";
import hmmbo from "@/app/images/hmmbo.png";

const NotFoundPage: NextPage = ({}) => {
  return (
    <div className="flex w-full h-full items-center justify-center text-right select-none">
      <p className="mt-10 pt-2 font-extrabold text-[6rem] md:text-[11rem] leading-[80px] md:leading-[130px] items-end tracking-[-0.55rem] md:tracking-[-0.65rem] text-secondary-gradient text-center">
        404!!
        <br />
        <span className="text-[#5277db] text-[2rem] md:text-[6rem] tracking-[0rem]">
          PAGE NOT FOUND
        </span>
      </p>

      <Image
        src={hmmbo}
        alt="HMMBO Studios Logo"
        width={200}
        height={200}
        className="hidden sm:block align-baseline" // ✅ Adjusted for baseline alignment
      />
    </div>
  );
};

export default NotFoundPage;

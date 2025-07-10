import { supporters, type Supporter } from "@/constants/supporters";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Supporters: NextPage = () => {
  return (
    <section className="p-4 mb-20 mt-20 mx-auto max-w-screen-xl flex flex-col items-center w-full select-none">
      {/* Heading */}
      <p className="font-black pb-1.5 text-3xl md:text-5xl leading-[68px] text-secondary-gradient mb-20 text-center">
        Thanks for Sharing Our Work
      </p>

      {/* Supporters Grid */}
      <div className="w-full px-4 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {supporters.map((item, index) => (
            <ThanksCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ThanksCard = ({ title, description, imageUrl, url }: Supporter) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Circular Image with Border */}
      <div className="w-auto h-32 border-4 border-primary rounded-full overflow-hidden">
        <Image
          alt={title}
          src={imageUrl}
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Title */}
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-primary font-bold text-lg hover:underline transition"
      >
        {title}
      </Link>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-2 max-w-xs">{description}</p>
    </div>
  );
};

export default Supporters;

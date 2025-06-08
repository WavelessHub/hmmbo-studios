import { supporters, type Supporter } from "@/constants/supporters";

import { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

const Supporters: NextPage = ({}) => {
  return (
    <section className="p-4 my-20 flex flex-col items-center w-full select-none">
      {/* Heading */}
      <motion.section
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: "tween" }}
      >
        <p className="font-black pb-2 text-3xl md:text-5xl leading-[68px] text-secondary-gradient mb-16 text-center">
          Thanks for Sharing Our Work
        </p>
      </motion.section>

      {/* Supporters Grid */}
      <div className="w-full md:px-80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {supporters.map((item, index) => (
            <motion.section
              key={index}
              viewport={{ once: true }}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: index * 0.2, type: "tween" }}
            >
              <ThanksCard
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                url={item.url}
              />
            </motion.section>
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
      <Image
        alt={title}
        src={imageUrl}
        width={128}
        height={128}
        className="w-32 h-32 object-cover rounded-full flex items-center justify-center border-4 border-primary overflow-hidden"
      />

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

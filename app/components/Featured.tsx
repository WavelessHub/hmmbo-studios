import { plugins } from "@/constants/plugins";

import DisplayCard from "./DisplayCard";

import { motion } from "motion/react";

const Featured = () => {
  return (
    <div>
      <motion.section
        viewport={{ once: true }}
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: "tween" }}
      >
        <p className="text-5xl m-20 font-semibold text-center text-secondary-gradient">
          Featured
        </p>
      </motion.section>

      <div className="w-full flex items-center gap-x-10 max-w-7xl">
        {plugins.map((plugin, index) => (
          <motion.section
            key={index}
            viewport={{ once: true }}
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: index * 0.2, type: "tween" }}
          >
            <DisplayCard {...plugin} />
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Featured;

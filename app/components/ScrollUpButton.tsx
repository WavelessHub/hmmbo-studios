"use client";

import { useScroll } from "@/hooks/useScroll";

import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

import { NextPage } from "next";

const ScrollUpButton: NextPage = ({}) => {
  const { canShow, scrollToTop } = useScroll();

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={canShow ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="fixed bottom-8 right-8 w-16 h-16 bg-primary flex items-center justify-center rounded-full shadow-lg"
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
};

export default ScrollUpButton;

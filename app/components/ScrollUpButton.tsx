"use client";

import { useEffect, useState } from "react";

import { NextPage } from "next";

import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

const ScrollUpButton: NextPage = ({}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
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

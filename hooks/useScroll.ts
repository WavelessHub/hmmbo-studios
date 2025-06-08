import { useMotionValueEvent, useScroll as scrollPage } from "motion/react";
import { useState } from "react";

export const useScroll = (threshold = 50) => {
  const [canShow, setCanShow] = useState(false);

  const { scrollY } = scrollPage();

  useMotionValueEvent(scrollY, "change", (currentScrollY) => {
    setCanShow(currentScrollY > threshold);
  });

  const scrollToTop = () => window.scroll({ top: 0, behavior: "smooth" });

  return { canShow, scrollToTop };
};

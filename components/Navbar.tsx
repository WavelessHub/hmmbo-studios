"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 100));

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-40 p-2", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible ? "0 8px 32px rgba(0,0,0,0.1)" : "none",
        y: visible ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative mx-auto hidden w-full max-w-7xl items-center justify-between rounded-full px-4 py-2 lg:flex",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
}: {
  items: { name: string; link: string }[];
  className?: string;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden lg:flex items-center space-x-2 text-sm font-medium",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          className="relative px-4 py-2 text-primary active:scale-90 transition-all duration-200"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 rounded-full bg-neutral-800"
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export const NavbarLogo = () => (
  <Link href="/" className="text-3xl font-bold text-primary">
    <span className="text-secondary-gradient">H</span>S
  </Link>
);

export const NavbarButton = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <Link
    href={href}
    className={cn(
      "inline-block cursor-pointer rounded-full px-5 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 active:scale-90 transition-all duration-200",
      className
    )}
  >
    {children}
  </Link>
);

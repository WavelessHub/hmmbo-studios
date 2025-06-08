"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { navbarItems, type NavbarItem } from "@/app/constants/navbar";

const Navbar: NextPage = ({}) => {
  return (
    <NavbarLayout>
      <NavBody>
        <NavbarLogo />
        <NavbarItems items={navbarItems} />
        <NavbarButton href="/login">Sign In</NavbarButton>
      </NavBody>
    </NavbarLayout>
  );
};

interface NavbarLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const NavbarLayout = ({ children, className }: NavbarLayoutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 100));

  return (
    <motion.div
      ref={ref}
      // animate={{ backdropFilter: visible ? "blur(10px)" : "none" }}
      className={cn(
        "fixed inset-x-0 z-40 bg-background",
        // visible && "bg-background/50",
        className
      )}
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

interface NavbarBodyProps {
  children: React.ReactNode;
  className?: string;
}

const NavBody = ({ children, className }: NavbarBodyProps) => {
  return (
    <div
      className={cn(
        "relative mx-auto hidden w-full max-w-7xl items-center justify-between p-4 lg:flex",
        className
      )}
    >
      {children}
    </div>
  );
};

interface NavbarItemProps {
  items: NavbarItem[];
  className?: string;
}

const NavbarItems = ({ items, className }: NavbarItemProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden lg:flex items-center space-x-2 text-[15px] font-medium",
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
              className="absolute inset-0 rounded-full bg-neutral-800/80"
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

const NavbarLogo = () => (
  <Link href="/" className="text-3xl font-bold text-primary">
    <span className="text-secondary-gradient">H</span>S
  </Link>
);

interface NavbarButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavbarButton = ({ href, children, className }: NavbarButtonProps) => (
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

export default Navbar;

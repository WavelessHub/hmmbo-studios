
"use client";
import {
    Children,
    cloneElement,
    isValidElement,
    ReactElement,
    useRef,
    useState,
    useEffect
  } from "react";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { navbarItems, type NavbarItem } from "@/constants/navbar";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavbarButton } from "../Navbar";

interface NavbarLayoutProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export const NavbarLayout = ({ children, className }: NavbarLayoutProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({ target: ref });
    const [visible, setVisible] = useState(false);
  
    useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 100));
  
    return (
      <motion.div
        ref={ref}
        animate={{ backdropFilter: visible ? "blur(10px)" : "none" }}
        className={cn(
          "fixed inset-x-0 z-40 bg-background",
          // visible && "bg-background/50",
          className
        )}
      >
        {Children.map(children, (child) =>
          isValidElement(child)
            ? cloneElement(child as ReactElement<{ visible?: boolean }>, {
                visible,
              })
            : child
        )}
      </motion.div>
    );
  };

  interface NavbarItemProps {
    items: NavbarItem[];
    className?: string;
  }
  
  export const NavbarItems = ({ items, className }: NavbarItemProps) => {
    const [hovered, setHovered] = useState<number | null>(null);
  
    const pathname = usePathname();
  
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
            {(hovered === idx || pathname === item.link) && (
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

  interface NavbarUserProps {
  className?: string;
}

export const NavbarUser = ({ className }: NavbarUserProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("CN");
  const [imageUrl, setImageUrl] = useState("https://github.com/shadcn.png");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setIsAuthenticated(true);
          if (data.username) setUsername(data.username);
          if (data.profilePicUrl) setImageUrl(data.profilePicUrl);
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated) {
    return (
      <Link href="/profile">
        <Avatar className={`cursor-pointer ${className ?? ""}`}>
          <AvatarImage src={imageUrl} alt={`@${username}`} />
          <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </Link>
    );
  }

  return <NavbarButton href="/login">Sign In</NavbarButton>;
};


import { cn } from "@/lib/utils";

import { NextPage } from "next";
import Link from "next/link";

import { navbarItems, type NavbarItem } from "@/constants/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavbarItems, NavbarLayout, NavbarUser } from "./navbar/NavbarUtils";

import { cookies } from "next/headers";

const Navbar: NextPage = ({}) => {

  // const cookieStore = cookies();
  // const token = cookieStore.get("token"); 
  // const isAuthenticated = !!token;
  // console.log("🔐 Server-side token:", token?.value);

  

  return (
    <NavbarLayout>
      <NavBody>
        <NavbarLogo />
        <NavbarItems items={navbarItems} />
        <NavbarUser />

      </NavBody>
    </NavbarLayout>
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
        "relative mx-auto hidden w-full max-w-7xl items-center justify-between p-6 lg:flex",
        className
      )}
    >
      {children}
    </div>
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

export const NavbarButton = ({ href, children, className }: NavbarButtonProps) => (
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

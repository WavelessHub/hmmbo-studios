import { navItems } from "./constants/navbar";

import {
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/Navbar";

import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton href="/login">Sign In</NavbarButton>
      </NavBody>
    </Navbar>
  );
};

export default Page;

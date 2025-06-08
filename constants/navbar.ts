interface NavbarItem {
  name: string;
  link: string;
}

const navbarItems: NavbarItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Help",
    link: "/help",
  },
];

export { navbarItems, type NavbarItem };

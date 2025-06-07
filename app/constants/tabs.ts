interface Tab {
  name: string;
  href: string;
}

const tabs: Tab[] = [
  { name: "Sign In", href: "login" },
  { name: "Create Account", href: "register" },
];

export { tabs };

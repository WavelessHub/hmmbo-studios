interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "⚡",
    title: "Customizable Plugins",
    description: "Tailor each plugin to your exact needs",
  },
  {
    icon: "🛡️",
    title: "Plugins You Can Trust",
    description: "Reliable. Secure. Crafted with love.",
  },
  {
    icon: "🔧",
    title: "Copy-Paste Configs",
    description:
      "Get started instantly with ready-to-use settings and presets.",
  },
  {
    icon: "🚀",
    title: "Direct Support",
    description: "Need help? — We offer fast, friendly, and direct.",
  },
];

export { features, type Feature };

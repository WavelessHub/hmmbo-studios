import { ForwardRefExoticComponent, RefAttributes } from "react";

import { Zap, LucideProps, Shield, Wrench, Rocket } from "lucide-react";

interface Feature {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Customizable Plugins",
    description: "Tailor each plugin to your exact needs",
  },
  {
    icon: Shield,
    title: "Plugins You Can Trust",
    description: "Reliable. Secure. Crafted with love.",
  },
  {
    icon: Wrench,
    title: "Copy-Paste Configs",
    description:
      "Get started instantly with ready-to-use settings and presets.",
  },
  {
    icon: Rocket,
    title: "Direct Support",
    description: "Need help? — We offer fast, friendly, and direct.",
  },
];

export { features, type Feature };

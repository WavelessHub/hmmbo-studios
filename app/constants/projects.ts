interface Project {
  title: string;
  price: number;
  description: string;
  image_url: string;
  category: string;
  onBuy: () => void;
}

const projects: Project[] = [
  {
    title: "AI Portfolio Website",
    price: 0,
    description:
      "A sleek portfolio website powered by AI recommendations and dynamic content rendering.",
    image_url:
      "https://preview.redd.it/34lldll2xtt91.png?width=640&crop=smart&auto=webp&s=5d988fd1715ed0867010b0a0078eeadc9d89fdf0",
    category: "Web Development",
    onBuy: () => {},
  },
  {
    title: "TaskMaster Pro",
    price: 0,
    description:
      "A productivity app for task management, scheduling, and time tracking.",
    image_url:
      "https://preview.redd.it/34lldll2xtt91.png?width=640&crop=smart&auto=webp&s=5d988fd1715ed0867010b0a0078eeadc9d89fdf0",
    category: "Mobile App",
    onBuy: () => {},
  },
  {
    title: "EcoShop",
    price: 0,
    description:
      "An e-commerce platform focused on sustainable and eco-friendly products.",
    image_url:
      "https://preview.redd.it/34lldll2xtt91.png?width=640&crop=smart&auto=webp&s=5d988fd1715ed0867010b0a0078eeadc9d89fdf0",
    category: "E-commerce",
    onBuy: () => {},
  },
  {
    title: "EduAI",
    price: 0,
    description:
      "An AI-powered platform offering personalized learning experiences for students.",
    image_url:
      "https://preview.redd.it/34lldll2xtt91.png?width=640&crop=smart&auto=webp&s=5d988fd1715ed0867010b0a0078eeadc9d89fdf0",
    category: "Education",
    onBuy: () => {},
  },
  {
    title: "CryptoDash",
    price: 0,
    description:
      "A dashboard for monitoring cryptocurrency trends, news, and market data in real time.",
    image_url:
      "https://preview.redd.it/34lldll2xtt91.png?width=640&crop=smart&auto=webp&s=5d988fd1715ed0867010b0a0078eeadc9d89fdf0",
    category: "Creative",
    onBuy: () => {},
  },
];

export { projects, type Project };

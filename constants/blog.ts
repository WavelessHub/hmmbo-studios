interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: Date;
  tags: Tag[];
  category: string;
  image: string;
}

type Tag =
  | "Essentials"
  | "Performance"
  | "PvP"
  | "Economy"
  | "Tutorials"
  | "Community"
  | "Modding"
  | "Updates";

const posts: Post[] = [
  {
    id: "1",
    title: "Top 5 Essentials Mods for Minecraft",
    excerpt:
      "Boost your Minecraft experience with these must-have essential mods.",
    author: "Alex Carter",
    date: new Date("2025-06-01"),
    tags: ["Essentials", "Modding", "Updates"],
    category: "Modding",
    image: "https://example.com/images/essentials-mods.jpg",
  },
  {
    id: "2",
    title: "PvP Tactics: Winning Every Duel",
    excerpt:
      "Master the art of PvP with these game-changing strategies and tips.",
    author: "Riley Stone",
    date: new Date("2025-05-28"),
    tags: ["PvP", "Performance", "Tutorials"],
    category: "Combat",
    image: "https://example.com/images/pvp-tactics.jpg",
  },
  {
    id: "3",
    title: "Setting Up a Minecraft Economy Server",
    excerpt:
      "Learn how to create a thriving economy server that keeps players coming back.",
    author: "Jordan Lee",
    date: new Date("2025-06-10"),
    tags: ["Economy", "Community", "Essentials"],
    category: "Servers",
    image: "https://example.com/images/economy-server.jpg",
  },
  {
    id: "4",
    title: "Optimizing Minecraft for Better FPS",
    excerpt: "Tips and mods to improve game performance and reduce lag.",
    author: "Morgan Kim",
    date: new Date("2025-06-14"),
    tags: ["Performance", "Modding", "Tutorials"],
    category: "Performance",
    image: "https://example.com/images/fps-boost.jpg",
  },
  {
    id: "5",
    title: "How to Start Modding Minecraft in 2025",
    excerpt:
      "A beginner's guide to making your first Minecraft mod with modern tools.",
    author: "Jamie Rivera",
    date: new Date("2025-06-17"),
    tags: ["Modding", "Tutorials", "Updates"],
    category: "Modding",
    image: "https://example.com/images/modding-guide.jpg",
  },
];

const popularTags = [
  "Essentials",
  "Performance",
  "PvP",
  "Economy",
  "Tutorials",
  "Community",
  "Modding",
  "Updates",
];

const recentPosts = posts.slice(0, 3);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export { posts, recentPosts, popularTags, containerVariants, itemVariants };

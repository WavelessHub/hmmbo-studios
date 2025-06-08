interface ItemData {
  title: string;
  price: number;
  bgImage: string;
  description: string;
  badge?: string;
  originalPrice?: number;
  onBuy: () => void;
}

const plugins: ItemData[] = [
  {
    bgImage:
      "https://preview.redd.it/34lldll2xtt91.png?width=640&crop=smart&auto=webp&s=5d988fd1715ed0867010b0a0078eeadc9d89fdf0",
    title: "Awesome Plugin",
    description: "Helps with managing mobs and more.",
    price: 9.99,
    originalPrice: 14.99,
    badge: "SALE",
    onBuy: () => alert(`Buy clicked for ${plugins[0].title}`),
  },
  {
    bgImage:
      "https://preview.redd.it/34lldll2xtt91.png?width=640&crop=smart&auto=webp&s=5d988fd1715ed0867010b0a0078eeadc9d89fdf0",
    title: "Events Pro",
    description: "Easily configure in-game events.",
    price: 12.49,
    onBuy: () => alert(`Buy clicked for ${plugins[1].title}`),
  },
  {
    bgImage:
      "https://preview.redd.it/34lldll2xtt91.png?width=640&crop=smart&auto=webp&s=5d988fd1715ed0867010b0a0078eeadc9d89fdf0",
    title: "Mob Master",
    description: "Mob AI tweaking and spawn control.",
    price: 7.99,
    originalPrice: 10,
    onBuy: () => alert(`Buy clicked for ${plugins[2].title}`),
  },
];

export { plugins, type ItemData };

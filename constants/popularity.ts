interface ItemData {
  title: string;
  price: number;
  bgImage: string;
  description: string;
  badge?: string;
  originalPrice?: number;
  onBuy: () => void;
}

const popularities: ItemData[] = [
  {
    bgImage:
      "https://preview.redd.it/34lldll2xtt91.png?width=640&crop=smart&auto=webp&s=5d988fd1715ed0867010b0a0078eeadc9d89fdf0",
    title: "Awesome Plugin",
    description: "Helps with managing mobs and more.",
    price: 9.99,
    originalPrice: 14.99,
    onBuy: () => alert(`Buy clicked for ${popularities[0].title}`),
  },
  {
    bgImage:
      "https://preview.redd.it/34lldll2xtt91.png?width=640&crop=smart&auto=webp&s=5d988fd1715ed0867010b0a0078eeadc9d89fdf0",
    title: "Awesome Plugin",
    description: "Helps with managing mobs and more.",
    price: 9.99,
    originalPrice: 14.99,
    onBuy: () => alert(`Buy clicked for ${popularities[0].title}`),
  },
  {
    bgImage:
      "https://preview.redd.it/34lldll2xtt91.png?width=640&crop=smart&auto=webp&s=5d988fd1715ed0867010b0a0078eeadc9d89fdf0",
    title: "Awesome Plugin",
    description: "Helps with managing mobs and more.",
    price: 9.99,
    originalPrice: 14.99,
    onBuy: () => alert(`Buy clicked for ${popularities[0].title}`),
  },
];

export { popularities, type ItemData };

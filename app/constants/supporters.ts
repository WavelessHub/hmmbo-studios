interface Supporter {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

const supporters: Supporter[] = [
  {
    title: "KasaiSora",
    description: "Youtuber",
    url: "https://youtu.be/bc8Hu_usaFU?si=GoLfBahLwbhFnwP3",
    imageUrl:
      "https://yt3.googleusercontent.com/ZvqyXU2bOZ1zps7hi0syzvAhISW7IhjreINMj3c9LgB8OHTfo6gIH6AA1alLA3TnCksSOYTEbgw=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "Server Miner",
    description: "Youtuber",
    url: "https://youtu.be/0oSu8DBi2gw?si=ZTvXLfnxyHy5wysQ",
    imageUrl:
      "https://yt3.googleusercontent.com/ytc/AIdro_lIwHatJcmD33o2FVZNGZUAWHkB-QG5DGExojIuAR4o8Q=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "DiamondXR",
    description: "Youtuber",
    url: "https://youtu.be/B70wC-jH-b8?si=LiCAns4QhvxekaJP",
    imageUrl:
      "https://yt3.googleusercontent.com/cGh9pDV3UliBmkLgxFfkBNcCJIxzKF76WO9xLFvhPzXZTfxJ8Bl-LlJwcdimI8Pe8oBo5dnDv14=s160-c-k-c0x00ffffff-no-rj",
  },
];

export { supporters, type Supporter };

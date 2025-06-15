// TYPES
export type Rating = "1" | "2" | "3" | "4" | "5";

export interface Update {
  id: string;
  title: string;
  description: string[];
  acknowledgement?: string;
  githubLink?: string;
  author: {
    username: string;
    avatarUrl: string;
  };
  timestamp: Date;
}

export interface Comment {
  id: string;
  profileImage: string;
  username: string;
  comment: string;
  rating: Rating;
}

export interface Build {
  buildId: string; // e.g. "v2022.09.10"
  projectVersion: string; // e.g. "1.21.5"
  githubLink: string;
  downloadLink: string;
  releaseDate: Date;
  isNew?: boolean;
  isDeprecated?: boolean;
}

export interface Version {
  mcVersion: string; // e.g. "1.21.5"
  builds: Build[];
}

export interface ProjectInfo {
  author: string;
  totalDownloads: number;
  firstRelease: Date;
  lastUpdate: Date;
  status: "Basic" | "Standard" | "Premium";
  rating: Rating;
  totalRatings: number;
}

export interface Project {
  id: string;
  title: string;
  price: number;
  discordLink: string;
  donationLink: string;
  description: string;
  image_url: string;
  category: string;
  updates: Update[];
  comments: Comment[];
  versions: Version[];
  projectInfo: ProjectInfo;
  onBuy: () => void;
}

export const projects: Project[] = [
  // Original Project (with dummy updates added)
  {
    id: "A9X3D2",
    title: "AI Portfolio Website",
    price: 0,
    description:
      "A sleek portfolio website powered by AI recommendations and dynamic content rendering.",
    image_url:
      "https://preview.redd.it/34lldll2xtt91.png?width=640&crop=smart&auto=webp&s=5d988fd1715ed0867010b0a0078eeadc9d89fdf0",
    category: "Web Development",
    discordLink: "https://discord.com/invite/yourhandle",
    donationLink: "https://buymeacoffee.com/yourhandle",
    updates: [
      {
        id: "UPD001",
        title: "Dark Mode Added & UI Tweaks",
        description: [
          "Implemented full-site dark mode.",
          "Tweaked typography and spacing for better readability.",
        ],
        acknowledgement: "Thanks to @ux_master for the dark mode idea!",
        githubLink: "https://github.com/example/project-ai/commit/abc123",
        author: {
          username: "John Doe",
          avatarUrl: "https://randomuser.me/api/portraits/men/34.jpg",
        },
        timestamp: new Date("2025-05-15T10:00:00"),
      },
      {
        id: "UPD002",
        title: "Dark Mode Added & UI Tweaks",
        description: [
          "Implemented full-site dark mode.",
          "Tweaked typography and spacing for better readability.",
        ],
        acknowledgement: "Thanks to @ux_master for the dark mode idea!",
        githubLink: "https://github.com/example/project-ai/commit/abc123",
        author: {
          username: "John Doe",
          avatarUrl: "https://randomuser.me/api/portraits/men/34.jpg",
        },
        timestamp: new Date("2025-05-15T10:00:00"),
      },
    ],
    comments: [
      {
        id: "C7P5R3",
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        username: "explorer_girl",
        comment: "Finally found a jungle biome thanks to this mod!",
        rating: "4",
      },
    ],
    versions: [
      {
        mcVersion: "1.20.4",
        builds: [
          {
            buildId: "v0.3.2",
            projectVersion: "1.20.4",
            githubLink: "https://github.com/biome-compass/1.20.4",
            downloadLink: "https://example.com/biome-compass-1.20.4",
            releaseDate: new Date("2025-05-28"),
          },
        ],
      },
    ],
    projectInfo: {
      author: "CraftMaster",
      totalDownloads: 473,
      firstRelease: new Date("2025-04-30"),
      lastUpdate: new Date("2025-05-28T15:30:00"),
      status: "Basic",
      rating: "4",
      totalRatings: 5,
    },
    onBuy: () => {},
  },
];

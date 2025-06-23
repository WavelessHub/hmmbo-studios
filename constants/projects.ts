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
  slogan: string;
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
    description: `
    [CENTER][IMG]https://i.postimg.cc/gjqjR7P4/Frame-7.png[/IMG]
[URL='http://wiki.hmmbo.com'][ATTACH=full]838620[/ATTACH][/URL] [URL='http://discord.hmmbo.com'][ATTACH=full]838616[/ATTACH][/URL] [URL='http://kofi.hmmbo.com'][ATTACH=full]838617[/ATTACH][/URL] [URL='http://hmmbo.com'][ATTACH=full]838618[/ATTACH][/URL]
[B]Ultimate BlockRegen Plugin[/B]
Effortless Block Regeneration for Minecraft Servers ⛏️

[B]Before purchasing the plugin, please read our full Terms and Conditions available at the bottom of the page.[/B][IMG]https://i.postimg.cc/9Q6fvHV8/BG-Information.png[/IMG][/CENTER]
[B]General Information[/B]
[LIST=1]
[*]Set up block regeneration within specified regions (cuboid boxes) and customize features like drop items, amounts, experience, names, lore, delay settings, regions, money rewards, and more
[*]Customize everything in-game using GUI.
[*][B]Soft dependencies: Vault , Itemsadder, Nexo, Oraxen and PlaceholderAPI.[/B]
[/LIST]
[B]Setup up a regen region[/B]
[LIST=1]
[*]Use the region wand to select the desired area for regeneration.
[*]Create a region within the selected area. ✂️
[*]Access the regen edit GUI to fine-tune the settings. Adjust the drop amount, delay, and other customizations to your liking. ️
[/LIST]
✨ Take full control over your block regeneration process by customizing it to suit your server's needs. With Ultimate BlockRegen Plugin, the possibilities are endless.

[CENTER][IMG]https://i.postimg.cc/9FCrVcGk/Frame-15.png[/IMG]
[/CENTER]
[IMG]https://i.postimg.cc/FsK1SxDZ/BG-commands.png[/IMG]
[B]Commands[/B]
Discover the power of Ultimate BlockRegen Plugin with these essential in-game commands:
[LIST]
[*]/regen wand: Acquire a wand for selecting positions.
[*]/regen pos1: Set the first position for region creation. 1️⃣
[*]/regen pos2: Set the second position for region creation. 2️⃣
[*]/regen create: Create a new region for block regeneration. ⛏️
[*]/regen delete: Remove an existing region. ️
[*]/regen reload: Refresh and reload the plugin.
[*]/regen menu: Open the Regen GUI for easy access to plugin features. ️
[*]/regen version: Check the current version of the plugin. ℹ️
[/LIST]
[IMG]https://i.postimg.cc/Kzr4Pq69/BG-permissions.png[/IMG]
[B]Permission Nodes[/B]
To control access to specific features of the Ultimate BlockRegen Plugin, we've implemented permission nodes. Here's a breakdown of the permission nodes and their corresponding functionalities:
[LIST]
[*]regen.reload: Grants the ability to reload the plugin configuration.
[*]regen.positions: Provides access to set the positions (Pos1 and Pos2) for region creation. 1️⃣2️⃣
[*]regen.create: Allows players to create new regions for block regeneration.
[*]regen.delete: Enables the deletion of existing regions. ️
[*]regen.menu: Grants access to open the Regen Menu for easy navigation of plugin features. ️
[/LIST]
Note: Players with operator (OP) status automatically bypass the permission nodes requirement.

Customize the permissions on your Minecraft server to give players the appropriate access levels and control over the Ultimate BlockRegen Plugin feature.
[IMG]https://i.postimg.cc/8zJ5Kz8f/BG-GUI.png[/IMG]
[CENTER][IMG]https://i.postimg.cc/nrkVMQvP/final-2.png[/IMG]
[IMG]https://i.postimg.cc/RFFhYbsr/final-1.jpg[/IMG][/CENTER]
[LEFT][B][IMG]https://i.postimg.cc/bryr308q/BG-TUT.png[/IMG]   [/B][/LEFT]
[CENTER][B][MEDIA=youtube]jy7bt7MhaM8[/MEDIA][/B][/CENTER]
[LEFT][B][IMG]https://i.postimg.cc/651qfGPN/BG-FAQS.png[/IMG]  [/B][/LEFT]
[SIZE=4][B]Ultimate BlockRegen: Comprehensive FAQ[/B][/SIZE]
[B]1. What is Ultimate BlockRegen?[/B]
Ultimate BlockRegen is a Minecraft plugin that allows server developer's to set up block regeneration areas, enhancing gameplay by automatically regenerating blocks within defined regions.

[B]2. How do I install Ultimate BlockRegen on my Minecraft server?[/B]
To install Ultimate BlockRegen, upload the plugin jar file into your server's plugin folder and restart the server to apply the changes.

[B]3. How can I create a regeneration region using Ultimate BlockRegen?[/B]
Use the /regen wand command to obtain a selection tool, define the desired area with /regen pos1 and /regen pos2, and then create the region with /regen create [name].

[B]4. What commands are available in Ultimate BlockRegen?[/B]
Essential commands include /regen wand, /regen create [name], /regen delete [name], /regen reload, and /regen menu. These commands help manage regions and plugin settings.

[B]5. Does Ultimate BlockRegen support custom block drops?[/B]
Yes, you can customize block drops, including items, amounts, experience, names, and lore, to tailor the gameplay experience.

[B]6. Can I set different regeneration settings for each region?[/B]
Absolutely, Ultimate BlockRegen allows per-region regeneration settings, enabling unique configurations for different areas on your server.

[B]7. Does it support ItemsAdder Blocks?[/B]
Yes, it supports ItemsAdder Blocks. Not crops

[B]8. Does it support Oraxen [B]Blocks[/B]?[/B]
Yes, Ultimate BlockRegen supports Oraxen Blocks.not crops

[B]9. How do I reload the Ultimate BlockRegen plugin after making changes?[/B]
Execute the /regen reload command to apply configuration changes without restarting the server.

[B]10. Where can I find help related to this plugin?[/B]
Join our dedicated Discord server for support and to connect with the community.

[B]11. I don't have PayPal. Are there other payment methods?[/B]
Yes, alternative payment methods are available. Please join our Discord server for assistance.

[B]12. Is this the best plugin for block regeneration on the market?[/B]
Yes, no other plugin offers as many features along with excellent and active support.

[B]13. Is this one of the best plugins for Skyblock?[/B]
Yes, Ultimate BlockRegen is widely used in Skyblock servers due to its extensive features for block and crop regeneration.

[B]14. Is Ultimate BlockRegen suitable for Survival SMP servers?[/B]
Absolutely, Ultimate BlockRegen is perfect for Survival SMP servers, offering customizable regeneration settings tailored to various gameplay needs.

[B]15. Is there a wiki available?[/B]
Yes, you can access the wiki at [URL='https://wiki.hmmbo.com/']wiki.hmmbo.com[/URL].

[B]16. Why are refunds not provided for Ultimate BlockRegen?[/B]
Since you have immediate access to the plugin via the provided jar file, there is no way for us to remove access from you. Therefore, all payments are final and non-refundable. We recommend reviewing the plugin features and functionality before making a purchase.

For more information, don't hesitate to check out our comprehensive Wiki. It provides detailed insights, tips, and instructions to maximize your experience with Ultimate BlockRegen Plugin.

If you've enjoyed using our plugin, we kindly request you to leave a review. Your valuable feedback helps us improve and provide even better features in the future. ⭐⭐⭐⭐⭐

We appreciate your continued support and hope you have an amazing time using Ultimate BlockRegen! ⛏️

[IMG]https://i.postimg.cc/CM7zd2H5/BG-TOS.png[/IMG]
[LIST=1]
[*][B]Final Payments[/B]
All payments are final and non-refundable. Disputes or chargebacks are strictly prohibited.


[*][B]Legal Origin of Funds[/B]
By purchasing our products, you affirm that the funds used are of legal origin and ownership.


[*][B]Usage Restrictions[/B]
You may not share, resell, or distribute our products in any form.


[*][B]Account Responsibility[/B]
Your license is linked to your SpigotMC account. We are not responsible for any issues, loss, or access problems associated with your account. We cannot and will not provide support for account recovery.


[*][B]Copyright[/B]
Our products are exclusively copyrighted, and you do not have the right to claim them as your own.
[/LIST]
[CENTER][B]Discord Support[/B]
[URL='http://discord.hmmbo.com']discord.hmmbo.com[/URL]
[IMG]https://i.postimg.cc/K4Sny3hs/Disocrd.png[/IMG][/CENTER]
    `,
    slogan:
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

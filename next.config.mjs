/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "preview.redd.it",
      },
      {
        hostname: "via.placeholder.com",
      },
      {
        hostname: "yt3.googleusercontent.com",
      },
      {
        hostname: "randomuser.me",
      },
      {
        hostname: "example.com",
      },
      {
        hostname: "cdn.modrinth.com",
      },
      {
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;

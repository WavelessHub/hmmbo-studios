import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { recentPosts } from "@/constants/blog";
import { NextPage } from "next";
import Image from "next/image";

const RecentPosts: NextPage = ({}) => {
  return (
    <Card className="minecraft-shadow text-gray-300 border-zinc-700 border-2">
      <CardHeader>
        <CardTitle className="text-xl">Recent Posts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentPosts.map((post) => (
          <div
            key={post.id}
            className="flex items-center gap-x-4 group cursor-pointer"
          >
            <Image
              width={64}
              height={64}
              alt={post.title}
              className="w-16 h-16 object-cover rounded-full pixelated"
              src="https://cdn.modrinth.com/data/gK9mebQg/28b537b7a5d104cbbce3b3366e39593164fd1f2c_96.webp"
            />
            <div>
              <h4 className="font-semibold text-sm group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {post.date.toDateString()}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentPosts;

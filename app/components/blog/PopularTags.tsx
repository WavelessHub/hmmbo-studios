import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { popularTags } from "@/constants/blog";
import { NextPage } from "next";

const PopularTags: NextPage = ({}) => {
  return (
    <Card className="minecraft-shadow text-gray-300 border-zinc-700 border-2">
      <CardHeader>
        <CardTitle className="text-xl">Popular Tags</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {popularTags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors"
          >
            {tag}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default PopularTags;

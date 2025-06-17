import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { NextPage } from "next";

const Search: NextPage = ({}) => {
  return (
    <Card className="minecraft-shadow text-gray-300 border-zinc-700 border-2">
      <CardHeader>
        <CardTitle className="text-xl">Search Blog</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <SearchIcon className="absolute text-gray-400 left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search articles..."
            className="pl-10 border-[1.5px] border-zinc-700 py-5"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Search;

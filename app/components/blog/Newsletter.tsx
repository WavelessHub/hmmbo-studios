import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NextPage } from "next";

interface Props {}

const Newsletter: NextPage<Props> = ({}) => {
  return (
    <Card className="minecraft-shadow border-none bg-gradient-to-br from-green-500 to-blue-500 text-white">
      <CardHeader>
        <CardTitle className="text-xl text-white">Stay Updated!</CardTitle>
        <CardDescription className="text-blue-100">
          Get new posts directly to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input
          placeholder="Your email address"
          className="bg-white/20 border-white/30 placeholder:text-blue-200 text-white"
        />
        <Button className="w-full py-5 bg-white text-primary hover:bg-gray-100 minecraft-shadow">
          Subscribe
        </Button>
      </CardContent>
    </Card>
  );
};

export default Newsletter;

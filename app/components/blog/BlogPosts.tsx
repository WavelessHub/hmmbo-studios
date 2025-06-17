"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { posts, itemVariants } from "@/constants/blog";
import { User, Calendar, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { NextPage } from "next";
import Image from "next/image";

const BlogPosts: NextPage = ({}) => {
  return (
    <div className="lg:col-span-2 space-y-8">
      {posts.map((post) => (
        <motion.div
          key={post.id}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="group cursor-pointer"
        >
          <Card className="overflow-hidden font-medium text-gray-300 minecraft-shadow hover:shadow-2xl transition-all duration-300 border-2 border-zinc-700 hover:border-primary">
            <div className="md:flex">
              <div className="md:w-1/3">
                <Image
                  width={100}
                  height={100}
                  alt={post.title}
                  className="w-full h-48 md:h-full object-cover"
                  src={post.image}
                />
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <Badge
                    variant="secondary"
                    className="mb-2 self-start bg-primary/10 text-primary"
                  >
                    {post.category}
                  </Badge>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-1">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date.toDateString()}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs text-gray-300 border-zinc-700 border-[1.5px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary p-4 py-5 hover:bg-zinc-900"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
      <motion.div variants={itemVariants} className="text-center pt-8">
        <Button
          size="lg"
          variant="outline"
          className="minecraft-shadow border-zinc-700 border-[1.5px] py-6 text-gray-400 font-medium"
        >
          Load More Posts
        </Button>
      </motion.div>
    </div>
  );
};

export default BlogPosts;

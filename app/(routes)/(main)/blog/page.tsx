import BlogPosts from "@/app/components/blog/BlogPosts";
import Newsletter from "@/app/components/blog/Newsletter";
import PopularTags from "@/app/components/blog/PopularTags";
import RecentPosts from "@/app/components/blog/RecentPosts";
import Search from "@/app/components/blog/Search";
import BlogTitle from "@/app/components/blog/BlogTitle";
import Footer from "@/app/components/Footer";

import { NextPage } from "next";

const BlogPage: NextPage = ({}) => {
  return (
    <>
      <div className="py-24">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <BlogTitle />

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <BlogPosts />

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <Search />

              {/* Recent Posts */}
              <RecentPosts />

              {/* Popular Tags */}
              <PopularTags />

              {/* Newsletter Signup */}
              <Newsletter />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogPage;

"use client";

import { Button } from "@/components/ui/button";

import { usePath } from "@/app/hooks/usePath";

import { NextPage } from "next";

const Tabs: NextPage = ({}) => {
  const { path, router } = usePath();

  if (path === "verify") return;

  return (
    <div className="flex mb-6 bg-black/30 rounded-lg py-1">
      <Button
        variant="secondary"
        onClick={() => router.push("login")}
        className={`flex-1 py-6 rounded-md text-sm font-medium transition-colors ${
          path === "login"
            ? "bg-primary/90 text-white"
            : "text-gray-300 hover:text-white"
        }`}
      >
        Sign In
      </Button>

      <Button
        variant="secondary"
        onClick={() => router.push("register")}
        className={`flex-1 py-6 rounded-md text-sm font-medium transition-colors ${
          path === "register"
            ? "bg-primary/90 text-white"
            : "text-gray-300 hover:text-white"
        }`}
      >
        Create Account
      </Button>
    </div>
  );
};

export default Tabs;

"use client";

import { Button } from "@/components/ui/button";

import { usePath } from "@/app/hooks/usePath";
import { tabs } from "@/app/constants/tabs";

import { NextPage } from "next";

interface Props {}

const Tabs: NextPage<Props> = ({}) => {
  const { path, router } = usePath();

  if (path === "verify") return;

  return (
    <div className="flex mb-8 bg-black/30 rounded-lg p-1">
      {tabs.map((tab, index) => (
        <Button
          key={index}
          variant="secondary"
          onClick={() => router.push(tab.href)}
          className={`flex-1 py-6 rounded-md text-sm font-medium transition-colors ${
            path === tab.href
              ? "bg-primary/90 text-white"
              : "text-gray-300 hover:text-white"
          }`}
        >
          {tab.name}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;

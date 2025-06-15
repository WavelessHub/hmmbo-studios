"use client";

import { Button } from "@/components/ui/button";
import { usePath } from "@/hooks/usePath";
import { cn } from "@/lib/utils";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";

const tabs: string[] = ["overview", "wiki", "updates", "version", "reviews"];

const Tabs: NextPage = ({}) => {
  const { path, router } = usePath();
  const { get } = useSearchParams();

  return (
    <div className="flex items-center gap-x-1">
      {tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => router.push(`/${path}?tab=${tab}`)}
          className={cn(
            "flex-1 font-bold text-base py-8 rounded-none",
            get("tab") === tab ? "bg-primary/80" : "bg-primary"
          )}
        >
          {tab.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;

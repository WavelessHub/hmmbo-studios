"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const usePath = () => {
  const currentPath = usePathname().slice(1, usePathname().length);

  const [path, setPath] = useState<string>(currentPath);

  const router = useRouter();

  useEffect(() => setPath(currentPath), [currentPath]);

  return { path, router };
};

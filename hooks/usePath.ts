"use client";

import { useEffect, useState } from "react";

import {
  redirect,
  useRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";

export const usePath = () => {
  const currentPath = usePathname().slice(1, usePathname().length);

  const [path, setPath] = useState<string>(currentPath);

  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => setPath(currentPath), [currentPath]);

  return { path, router, params, redirect };
};

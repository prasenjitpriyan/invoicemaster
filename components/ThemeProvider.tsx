"use client";

import React from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  return (
    <div className={mode}>
      <div className="bg-zinc-50 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-50 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;

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
      <div className="bg-zinc-100 text-gray-700 dark:text-zinc-100 dark:bg-zinc-400 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;

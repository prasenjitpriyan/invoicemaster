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
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-black min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;

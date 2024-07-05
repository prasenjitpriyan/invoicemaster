"use client";

import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/lib/features/theme/themeSlice";
import { RootState } from "@/lib/store";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <nav className="w-100 px-8">
      <div className="h-16 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="md:order-1 flex justify-center items-center">
          <FaFileInvoice className="h-5 w-5" />
          <h1 className="font-semibold text-xl">InvoiceMaster</h1>
        </div>
        <div className="order-2">
          <button
            className="px-2 py-2 bg-zinc-800 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-800 rounded-full flex items-center"
            onClick={() => dispatch(toggleTheme())}
          >
            {mode === "light" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
